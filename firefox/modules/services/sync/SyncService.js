/**
 * Sync Service
 * Main orchestrator for cloud synchronization
 * Handles provider management, debouncing, and conflict resolution
 */

import { WebDAVProvider } from './WebDAVProvider.js';
import { encryptPassword, decryptPassword } from './crypto.js';

// Sync status constants
export const SyncStatus = {
    DISABLED: 'disabled',
    IDLE: 'idle',
    SYNCING: 'syncing',
    ERROR: 'error',
    OFFLINE: 'offline'
};

// Default sync settings
const DEFAULT_SYNC_SETTINGS = {
    enabled: false,
    provider: 'webdav', // Currently only webdav supported
    webdav: {
        serverUrl: '',
        username: '',
        encryptedPassword: '',
        filePath: 'DashboardSync/dashboard-data.json'
    },
    lastSyncTime: null,
    lastSyncError: null
};

// Debounce delay for real-time sync (ms)
const SYNC_DEBOUNCE_MS = 1000;

export class SyncService {
    constructor() {
        /** @type {BaseSyncProvider|null} */
        this.provider = null;
        
        /** @type {Object} */
        this.settings = { ...DEFAULT_SYNC_SETTINGS };
        
        /** @type {SyncStatus} */
        this.status = SyncStatus.DISABLED;
        
        /** @type {number|null} */
        this.syncTimeout = null;
        
        /** @type {boolean} */
        this.isSyncing = false;
        
        /** @type {Function|null} */
        this.onStatusChange = null;
        
        /** @type {Function|null} */
        this.onDataReceived = null;
        
        /** @type {string|null} */
        this.lastError = null;
    }

    /**
     * Initialize the sync service
     * Loads settings and sets up provider if enabled
     * @returns {Promise<void>}
     */
    async initialize() {
        await this.loadSettings();
        
        if (this.settings.enabled) {
            await this.setupProvider();
        }
    }

    /**
     * Load sync settings from storage
     * @returns {Promise<void>}
     */
    async loadSettings() {
        return new Promise((resolve) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.get(['syncSettings'], (result) => {
                    if (result.syncSettings) {
                        this.settings = { ...DEFAULT_SYNC_SETTINGS, ...result.syncSettings };
                    }
                    resolve();
                });
            } else {
                // Fallback for development
                try {
                    const stored = localStorage.getItem('syncSettings');
                    if (stored) {
                        this.settings = { ...DEFAULT_SYNC_SETTINGS, ...JSON.parse(stored) };
                    }
                } catch (e) {
                    console.error('Error loading sync settings:', e);
                }
                resolve();
            }
        });
    }

    /**
     * Save sync settings to storage
     * @returns {Promise<void>}
     */
    async saveSettings() {
        return new Promise((resolve) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.set({ syncSettings: this.settings }, resolve);
            } else {
                localStorage.setItem('syncSettings', JSON.stringify(this.settings));
                resolve();
            }
        });
    }

    /**
     * Setup the sync provider based on current settings
     * @returns {Promise<boolean>}
     */
    async setupProvider() {
        if (this.settings.provider === 'webdav') {
            try {
                // Decrypt password
                const password = await decryptPassword(this.settings.webdav.encryptedPassword);
                
                this.provider = new WebDAVProvider({
                    serverUrl: this.settings.webdav.serverUrl,
                    username: this.settings.webdav.username,
                    password: password,
                    filePath: this.settings.webdav.filePath
                });

                // Test connection
                const connected = await this.provider.connect();
                
                if (connected) {
                    this.setStatus(SyncStatus.IDLE);
                    return true;
                } else {
                    this.setStatus(SyncStatus.OFFLINE);
                    this.lastError = this.provider.getLastError()?.message || 'Connection failed';
                    return false;
                }
            } catch (error) {
                console.error('Error setting up sync provider:', error);
                this.setStatus(SyncStatus.ERROR);
                this.lastError = error.message;
                return false;
            }
        }
        
        return false;
    }

    /**
     * Configure WebDAV settings
     * @param {Object} config
     * @param {string} config.serverUrl
     * @param {string} config.username
     * @param {string} config.password - Plaintext password (will be encrypted)
     * @param {string} config.filePath
     * @returns {Promise<void>}
     */
    async configureWebDAV(config) {
        // Encrypt the password before storing
        const encryptedPassword = await encryptPassword(config.password);
        
        this.settings.webdav = {
            serverUrl: config.serverUrl,
            username: config.username,
            encryptedPassword: encryptedPassword,
            filePath: config.filePath || 'DashboardSync/dashboard-data.json'
        };
        this.settings.provider = 'webdav';
        
        await this.saveSettings();
    }

    /**
     * Enable sync and setup provider
     * @returns {Promise<boolean>}
     */
    async enable() {
        this.settings.enabled = true;
        await this.saveSettings();
        
        const success = await this.setupProvider();
        if (!success) {
            // Keep enabled but show offline status
            this.setStatus(SyncStatus.OFFLINE);
        }
        
        return success;
    }

    /**
     * Disable sync
     * @returns {Promise<void>}
     */
    async disable() {
        this.settings.enabled = false;
        this.provider = null;
        this.setStatus(SyncStatus.DISABLED);
        await this.saveSettings();
    }

    /**
     * Check if sync is enabled
     * @returns {boolean}
     */
    isEnabled() {
        return this.settings.enabled && this.provider !== null;
    }

    /**
     * Get current sync status
     * @returns {SyncStatus}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Set sync status and notify listeners
     * @param {SyncStatus} status 
     */
    setStatus(status) {
        this.status = status;
        if (this.onStatusChange) {
            this.onStatusChange(status, this.lastError);
        }
    }

    /**
     * Queue a sync operation (debounced)
     * Called after every local data change
     * @param {Object} data - The data to sync
     */
    queueSync(data) {
        if (!this.isEnabled()) {
            return;
        }

        // Clear existing timeout
        if (this.syncTimeout) {
            clearTimeout(this.syncTimeout);
        }

        // Set new timeout for debounced sync
        this.syncTimeout = setTimeout(() => {
            this.performSync(data);
        }, SYNC_DEBOUNCE_MS);
    }

    /**
     * Perform the actual sync operation (upload)
     * @param {Object} data 
     * @returns {Promise<boolean>}
     */
    async performSync(data) {
        if (!this.isEnabled() || this.isSyncing) {
            return false;
        }

        this.isSyncing = true;
        this.setStatus(SyncStatus.SYNCING);

        try {
            // Add sync metadata
            const syncData = {
                ...data,
                _syncMetadata: {
                    lastModified: Date.now(),
                    version: '1.0',
                    provider: this.settings.provider
                }
            };

            await this.provider.upload(syncData);
            
            this.settings.lastSyncTime = Date.now();
            this.settings.lastSyncError = null;
            await this.saveSettings();
            
            this.lastError = null;
            this.setStatus(SyncStatus.IDLE);
            this.isSyncing = false;
            
            return true;
        } catch (error) {
            console.error('Sync upload failed:', error);
            this.lastError = error.message;
            this.settings.lastSyncError = error.message;
            await this.saveSettings();
            
            // Check if it's a network error (offline)
            if (error.message.includes('fetch') || error.message.includes('network') || 
                error.name === 'TypeError') {
                this.setStatus(SyncStatus.OFFLINE);
            } else {
                this.setStatus(SyncStatus.ERROR);
            }
            
            this.isSyncing = false;
            return false;
        }
    }

    /**
     * Pull data from remote server
     * @returns {Promise<Object|null>}
     */
    async pull() {
        if (!this.isEnabled()) {
            return null;
        }

        try {
            this.setStatus(SyncStatus.SYNCING);
            const remoteData = await this.provider.download();
            this.setStatus(SyncStatus.IDLE);
            return remoteData;
        } catch (error) {
            console.error('Sync pull failed:', error);
            this.lastError = error.message;
            
            if (error.message.includes('fetch') || error.message.includes('network') ||
                error.name === 'TypeError') {
                this.setStatus(SyncStatus.OFFLINE);
            } else {
                this.setStatus(SyncStatus.ERROR);
            }
            
            return null;
        }
    }

    /**
     * Sync on startup - pull remote data and resolve conflicts
     * Uses "newest wins" strategy
     * @param {Object} localData - Current local data
     * @returns {Promise<{data: Object, source: 'local'|'remote'|'none'}>}
     */
    async syncOnStartup(localData) {
        if (!this.settings.enabled) {
            return { data: localData, source: 'none' };
        }

        // Try to setup provider if not already connected
        if (!this.provider) {
            const connected = await this.setupProvider();
            if (!connected) {
                // Offline - use local data silently
                return { data: localData, source: 'local' };
            }
        }

        try {
            this.setStatus(SyncStatus.SYNCING);
            
            const remoteData = await this.provider.download();
            
            if (!remoteData) {
                // No remote data exists yet, push local data
                if (localData && Object.keys(localData).length > 0) {
                    await this.performSync(localData);
                }
                this.setStatus(SyncStatus.IDLE);
                return { data: localData, source: 'local' };
            }

            // Compare timestamps
            const localTimestamp = localData?._syncMetadata?.lastModified || 0;
            const remoteTimestamp = remoteData?._syncMetadata?.lastModified || 0;

            if (remoteTimestamp > localTimestamp) {
                // Remote is newer - use remote data
                this.settings.lastSyncTime = Date.now();
                await this.saveSettings();
                this.setStatus(SyncStatus.IDLE);
                
                // Remove sync metadata before returning
                const { _syncMetadata, ...dataWithoutMeta } = remoteData;
                return { data: dataWithoutMeta, source: 'remote' };
            } else {
                // Local is newer or same - push to remote
                await this.performSync(localData);
                return { data: localData, source: 'local' };
            }
        } catch (error) {
            console.error('Sync on startup failed:', error);
            this.lastError = error.message;
            
            // Silent offline handling
            if (error.message.includes('fetch') || error.message.includes('network') ||
                error.name === 'TypeError') {
                this.setStatus(SyncStatus.OFFLINE);
            } else {
                this.setStatus(SyncStatus.ERROR);
            }
            
            // Return local data on error
            return { data: localData, source: 'local' };
        }
    }

    /**
     * Force an immediate sync (manual trigger)
     * @param {Object} data
     * @returns {Promise<boolean>}
     */
    async syncNow(data) {
        // Clear any pending debounced sync
        if (this.syncTimeout) {
            clearTimeout(this.syncTimeout);
            this.syncTimeout = null;
        }
        
        return this.performSync(data);
    }

    /**
     * Test connection with current settings
     * @param {Object} config - Optional config to test (uses current if not provided)
     * @returns {Promise<{success: boolean, error?: string, permissionRequired?: boolean}>}
     */
    async testConnection(config) {
        try {
            let password = config.password;
            
            // If password is encrypted, decrypt it
            if (config.encryptedPassword && !config.password) {
                password = await decryptPassword(config.encryptedPassword);
            }
            
            console.log('SyncService: Testing connection...');
            console.log('SyncService: Server URL:', config.serverUrl);
            console.log('SyncService: Username:', config.username);
            console.log('SyncService: Password length:', password ? password.length : 0);
            console.log('SyncService: Password first/last char:', password ? `${password[0]}...${password[password.length-1]}` : 'N/A');
            
            const testProvider = new WebDAVProvider({
                serverUrl: config.serverUrl,
                username: config.username,
                password: password,
                filePath: config.filePath || 'DashboardSync/dashboard-data.json'
            });

            const connected = await testProvider.connect();
            
            if (connected) {
                return { success: true };
            } else {
                return { 
                    success: false, 
                    error: testProvider.getLastError()?.message || 'Connection failed' 
                };
            }
        } catch (error) {
            // Check if permission is required
            if (error.message === 'PERMISSION_REQUIRED') {
                return { success: false, error: 'Permission required', permissionRequired: true };
            }
            return { success: false, error: error.message };
        }
    }

    /**
     * Request host permission for a WebDAV server URL
     * Must be called from a user gesture (click handler)
     * @param {string} serverUrl - The WebDAV server URL
     * @returns {Promise<boolean>}
     */
    async requestHostPermission(serverUrl) {
        try {
            const urlObj = new URL(serverUrl);
            const origin = `${urlObj.protocol}//${urlObj.host}/*`;
            
            return await chrome.permissions.request({
                origins: [origin]
            });
        } catch (e) {
            console.error('Error requesting host permission:', e);
            return false;
        }
    }

    /**
     * Check if we have permission for a WebDAV server URL
     * @param {string} serverUrl - The WebDAV server URL
     * @returns {Promise<boolean>}
     */
    async hasHostPermission(serverUrl) {
        try {
            const urlObj = new URL(serverUrl);
            const origin = `${urlObj.protocol}//${urlObj.host}/*`;
            
            return await chrome.permissions.contains({
                origins: [origin]
            });
        } catch (e) {
            console.error('Error checking host permission:', e);
            return false;
        }
    }

    /**
     * Get sync settings (without sensitive data)
     * @returns {Object}
     */
    getSettings() {
        return {
            enabled: this.settings.enabled,
            provider: this.settings.provider,
            webdav: {
                serverUrl: this.settings.webdav.serverUrl,
                username: this.settings.webdav.username,
                filePath: this.settings.webdav.filePath,
                hasPassword: !!this.settings.webdav.encryptedPassword
            },
            lastSyncTime: this.settings.lastSyncTime,
            lastSyncError: this.settings.lastSyncError
        };
    }

    /**
     * Get last sync time formatted
     * @param {string} locale - 'de' or 'en'
     * @returns {string|null}
     */
    getLastSyncTimeFormatted(locale = 'de') {
        if (!this.settings.lastSyncTime) {
            return null;
        }
        
        const date = new Date(this.settings.lastSyncTime);
        const localeStr = locale === 'en' ? 'en-GB' : 'de-DE';
        
        return date.toLocaleString(localeStr, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Export singleton instance
export const syncService = new SyncService();
