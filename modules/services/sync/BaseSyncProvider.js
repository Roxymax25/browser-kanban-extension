/**
 * Base Sync Provider
 * Abstract class that defines the interface for all sync providers
 * (WebDAV, Google Drive, Dropbox, etc.)
 */

export class BaseSyncProvider {
    /**
     * @param {Object} config - Provider-specific configuration
     */
    constructor(config = {}) {
        if (new.target === BaseSyncProvider) {
            throw new Error('BaseSyncProvider is abstract and cannot be instantiated directly');
        }
        this.config = config;
        this.isConnected = false;
        this.lastError = null;
    }

    /**
     * Get the provider type identifier
     * @returns {string}
     */
    getType() {
        throw new Error('Method getType() must be implemented');
    }

    /**
     * Test connection to the remote server
     * @returns {Promise<boolean>} - True if connection successful
     */
    async connect() {
        throw new Error('Method connect() must be implemented');
    }

    /**
     * Disconnect from the remote server
     * @returns {Promise<void>}
     */
    async disconnect() {
        throw new Error('Method disconnect() must be implemented');
    }

    /**
     * Upload data to the remote server
     * @param {Object} data - The data to upload
     * @returns {Promise<void>}
     */
    async upload(data) {
        throw new Error('Method upload() must be implemented');
    }

    /**
     * Download data from the remote server
     * @returns {Promise<Object|null>} - The downloaded data or null if not found
     */
    async download() {
        throw new Error('Method download() must be implemented');
    }

    /**
     * Get the last modified timestamp of the remote data
     * @returns {Promise<number|null>} - Unix timestamp or null
     */
    async getRemoteLastModified() {
        throw new Error('Method getRemoteLastModified() must be implemented');
    }

    /**
     * Check if remote file/data exists
     * @returns {Promise<boolean>}
     */
    async exists() {
        throw new Error('Method exists() must be implemented');
    }

    /**
     * Update provider configuration
     * @param {Object} config 
     */
    updateConfig(config) {
        this.config = { ...this.config, ...config };
        this.isConnected = false; // Require reconnection after config change
    }

    /**
     * Get the last error that occurred
     * @returns {Error|null}
     */
    getLastError() {
        return this.lastError;
    }

    /**
     * Clear the last error
     */
    clearError() {
        this.lastError = null;
    }
}
