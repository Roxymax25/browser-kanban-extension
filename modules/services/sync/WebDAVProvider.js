/**
 * WebDAV Sync Provider
 * Implements sync functionality for WebDAV servers (Nextcloud, ownCloud, etc.)
 */

import { BaseSyncProvider } from './BaseSyncProvider.js';

export class WebDAVProvider extends BaseSyncProvider {
    /**
     * @param {Object} config
     * @param {string} config.serverUrl - WebDAV server URL (e.g., https://nextcloud.example.com/remote.php/dav/files/username/)
     * @param {string} config.username - WebDAV username
     * @param {string} config.password - WebDAV password (plaintext, should be decrypted before passing)
     * @param {string} config.filePath - Path to sync file relative to serverUrl (default: DashboardSync/dashboard-data.json)
     */
    constructor(config = {}) {
        super(config);
        this.config = {
            serverUrl: '',
            username: '',
            password: '',
            filePath: 'DashboardSync/dashboard-data.json',
            ...config
        };
    }

    /**
     * @returns {string}
     */
    getType() {
        return 'webdav';
    }

    /**
     * Get authorization header value
     * Uses proper UTF-8 encoding for special characters in username/password
     * @returns {string}
     */
    _getAuthHeader() {
        const credentials = `${this.config.username}:${this.config.password}`;
        // Properly encode UTF-8 characters before base64 encoding
        const encoded = btoa(unescape(encodeURIComponent(credentials)));
        return 'Basic ' + encoded;
    }

    /**
     * Get the full URL to the sync file
     * @returns {string}
     */
    _getFileUrl() {
        let baseUrl = this.config.serverUrl.trim();
        // Ensure base URL ends with /
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        // Remove leading slash from filePath if present
        let filePath = this.config.filePath.trim();
        if (filePath.startsWith('/')) {
            filePath = filePath.substring(1);
        }
        return baseUrl + filePath;
    }

    /**
     * Get the folder URL (parent of sync file)
     * @returns {string}
     */
    _getFolderUrl() {
        const fileUrl = this._getFileUrl();
        const lastSlash = fileUrl.lastIndexOf('/');
        return fileUrl.substring(0, lastSlash + 1);
    }

    /**
     * Test connection to WebDAV server
     * @returns {Promise<boolean>}
     */
    async connect() {
        try {
            this.lastError = null;
            
            // Ensure URL ends with /
            let serverUrl = this.config.serverUrl.trim();
            if (!serverUrl.endsWith('/')) {
                serverUrl += '/';
            }
            
            console.log('WebDAV: Attempting to connect to:', serverUrl);
            
            // Try multiple methods as different servers have different CORS configs
            let response;
            let lastError = null;
            
            // Method 1: Try PROPFIND (proper WebDAV)
            try {
                console.log('WebDAV: Trying PROPFIND...');
                response = await fetch(serverUrl, {
                    method: 'PROPFIND',
                    headers: {
                        'Authorization': this._getAuthHeader(),
                        'Depth': '0'
                    },
                    mode: 'cors',
                    credentials: 'omit'
                });
                console.log('WebDAV: PROPFIND response status:', response.status);
                
                if (response.status === 207 || response.ok) {
                    console.log('WebDAV: PROPFIND successful!');
                    this.isConnected = true;
                    return true;
                }
            } catch (e) {
                console.warn('WebDAV: PROPFIND failed:', e.message);
                lastError = e;
            }

            // Method 2: Try GET (simpler, more CORS-friendly)
            try {
                console.log('WebDAV: Trying GET...');
                response = await fetch(serverUrl, {
                    method: 'GET',
                    headers: {
                        'Authorization': this._getAuthHeader()
                    },
                    mode: 'cors',
                    credentials: 'omit'
                });
                console.log('WebDAV: GET response status:', response.status);
                
                if (response.status === 401) {
                    throw new Error('Authentication failed: Invalid username or password');
                }
                
                if (response.status === 404) {
                    throw new Error('Server URL not found: Check your WebDAV URL');
                }
                
                if (response.ok || response.status === 207) {
                    console.log('WebDAV: GET successful!');
                    this.isConnected = true;
                    return true;
                }
            } catch (e) {
                if (e.message.includes('Authentication failed') || e.message.includes('not found')) {
                    throw e;
                }
                console.warn('WebDAV: GET failed:', e.message);
                lastError = e;
            }

            // Method 3: Try OPTIONS (CORS preflight check)
            try {
                console.log('WebDAV: Trying OPTIONS...');
                response = await fetch(serverUrl, {
                    method: 'OPTIONS',
                    headers: {
                        'Authorization': this._getAuthHeader()
                    },
                    mode: 'cors'
                });
                console.log('WebDAV: OPTIONS response status:', response.status);
                
                // If OPTIONS works, the server accepts CORS
                if (response.ok || response.status === 200 || response.status === 204) {
                    console.log('WebDAV: OPTIONS successful - server accepts requests');
                    this.isConnected = true;
                    return true;
                }
            } catch (e) {
                console.warn('WebDAV: OPTIONS failed:', e.message);
                lastError = e;
            }

            // If we got a response but it wasn't successful
            if (response) {
                if (response.status === 401) {
                    throw new Error('Authentication failed: Invalid username or password');
                }
                if (response.status === 404) {
                    throw new Error('Server URL not found: Check your WebDAV URL');
                }
                throw new Error(`Connection failed: HTTP ${response.status} ${response.statusText}`);
            }

            // All methods failed
            throw lastError || new Error('All connection methods failed');
            
        } catch (error) {
            console.error('WebDAV connection error:', error);
            
            // Provide more helpful error messages
            if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
                this.lastError = new Error(
                    'CORS blocked: The server does not allow browser requests. ' +
                    'This is a server configuration issue. Try using an App Password if available.'
                );
            } else {
                this.lastError = error;
            }
            
            this.isConnected = false;
            return false;
        }
    }

    /**
     * Disconnect (no-op for WebDAV, just update state)
     */
    async disconnect() {
        this.isConnected = false;
    }

    /**
     * Ensure the parent folder exists, create if not
     * @returns {Promise<boolean>}
     */
    async _ensureFolderExists() {
        const folderUrl = this._getFolderUrl();
        
        // Check if folder exists
        try {
            const checkResponse = await fetch(folderUrl, {
                method: 'PROPFIND',
                headers: {
                    'Authorization': this._getAuthHeader(),
                    'Depth': '0'
                },
                mode: 'cors',
                credentials: 'omit'
            });

            if (checkResponse.ok || checkResponse.status === 207) {
                return true; // Folder exists
            }

            if (checkResponse.status === 404) {
                // Try to create the folder
                const mkcolResponse = await fetch(folderUrl, {
                    method: 'MKCOL',
                    headers: {
                        'Authorization': this._getAuthHeader()
                    },
                    mode: 'cors',
                    credentials: 'omit'
                });

                if (mkcolResponse.ok || mkcolResponse.status === 201) {
                    return true;
                }

                // If MKCOL failed, try creating parent folders recursively
                return await this._createFoldersRecursively();
            }

            return false;
        } catch (error) {
            console.error('Error ensuring folder exists:', error);
            return false;
        }
    }

    /**
     * Create folders recursively if they don't exist
     * @returns {Promise<boolean>}
     */
    async _createFoldersRecursively() {
        const filePath = this.config.filePath;
        const pathParts = filePath.split('/').filter(p => p && !p.includes('.'));
        
        let currentUrl = this.config.serverUrl;
        if (!currentUrl.endsWith('/')) {
            currentUrl += '/';
        }

        for (const folder of pathParts) {
            currentUrl += folder + '/';
            
            try {
                const checkResponse = await fetch(currentUrl, {
                    method: 'PROPFIND',
                    headers: {
                        'Authorization': this._getAuthHeader(),
                        'Depth': '0'
                    },
                    mode: 'cors',
                    credentials: 'omit'
                });

                if (checkResponse.status === 404) {
                    // Create this folder
                    const mkcolResponse = await fetch(currentUrl, {
                        method: 'MKCOL',
                        headers: {
                            'Authorization': this._getAuthHeader()
                        },
                        mode: 'cors',
                        credentials: 'omit'
                    });

                    if (!mkcolResponse.ok && mkcolResponse.status !== 201) {
                        console.error(`Failed to create folder: ${currentUrl}`);
                        return false;
                    }
                }
            } catch (error) {
                console.error(`Error creating folder ${currentUrl}:`, error);
                return false;
            }
        }

        return true;
    }

    /**
     * Upload data to WebDAV server
     * @param {Object} data 
     * @returns {Promise<void>}
     */
    async upload(data) {
        try {
            this.lastError = null;

            // Ensure folder exists
            await this._ensureFolderExists();

            const fileUrl = this._getFileUrl();
            const content = JSON.stringify(data, null, 2);

            const response = await fetch(fileUrl, {
                method: 'PUT',
                headers: {
                    'Authorization': this._getAuthHeader(),
                    'Content-Type': 'application/json'
                },
                body: content,
                mode: 'cors',
                credentials: 'omit'
            });

            if (!response.ok && response.status !== 201 && response.status !== 204) {
                throw new Error(`Upload failed: HTTP ${response.status}`);
            }

            this.isConnected = true;
        } catch (error) {
            this.lastError = error;
            this.isConnected = false;
            throw error;
        }
    }

    /**
     * Download data from WebDAV server
     * @returns {Promise<Object|null>}
     */
    async download() {
        try {
            this.lastError = null;
            const fileUrl = this._getFileUrl();

            const response = await fetch(fileUrl, {
                method: 'GET',
                headers: {
                    'Authorization': this._getAuthHeader()
                },
                mode: 'cors',
                credentials: 'omit'
            });

            if (response.status === 404) {
                // File doesn't exist yet, that's okay
                this.isConnected = true;
                return null;
            }

            if (!response.ok) {
                throw new Error(`Download failed: HTTP ${response.status}`);
            }

            this.isConnected = true;
            const text = await response.text();
            
            if (!text.trim()) {
                return null;
            }

            return JSON.parse(text);
        } catch (error) {
            this.lastError = error;
            
            // Don't set isConnected = false for network errors during download
            // as this could just be a temporary issue
            if (error.name !== 'SyntaxError') {
                // JSON parse errors shouldn't affect connection status
                console.error('WebDAV download error:', error);
            }
            
            throw error;
        }
    }

    /**
     * Get the last modified timestamp of the remote file
     * @returns {Promise<number|null>} Unix timestamp in milliseconds
     */
    async getRemoteLastModified() {
        try {
            const fileUrl = this._getFileUrl();

            const response = await fetch(fileUrl, {
                method: 'PROPFIND',
                headers: {
                    'Authorization': this._getAuthHeader(),
                    'Depth': '0',
                    'Content-Type': 'application/xml'
                },
                body: `<?xml version="1.0" encoding="utf-8" ?>
                    <d:propfind xmlns:d="DAV:">
                        <d:prop>
                            <d:getlastmodified/>
                        </d:prop>
                    </d:propfind>`,
                mode: 'cors',
                credentials: 'omit'
            });

            if (response.status === 404) {
                return null;
            }

            if (!response.ok && response.status !== 207) {
                return null;
            }

            const text = await response.text();
            
            // Parse the getlastmodified from XML response
            const match = text.match(/<d:getlastmodified>([^<]+)<\/d:getlastmodified>/i) ||
                         text.match(/<getlastmodified>([^<]+)<\/getlastmodified>/i) ||
                         text.match(/<lp1:getlastmodified>([^<]+)<\/lp1:getlastmodified>/i);
            
            if (match) {
                return new Date(match[1]).getTime();
            }

            return null;
        } catch (error) {
            console.error('Error getting remote last modified:', error);
            return null;
        }
    }

    /**
     * Check if the remote file exists
     * @returns {Promise<boolean>}
     */
    async exists() {
        try {
            const fileUrl = this._getFileUrl();

            const response = await fetch(fileUrl, {
                method: 'HEAD',
                headers: {
                    'Authorization': this._getAuthHeader()
                },
                mode: 'cors',
                credentials: 'omit'
            });

            return response.ok;
        } catch (error) {
            return false;
        }
    }
}
