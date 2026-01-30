/**
 * Storage Service
 * Handles interactions with Chrome's storage API
 */

export const StorageService = {
    /**
     * Load all application data
     * @returns {Promise<Object>} The stored data
     */
    loadData: () => {
        return new Promise((resolve, reject) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.get(
                    ['tasks', 'clipboardItems', 'workTimeSessions', 'timeTracker', 'archivedTaskLogs', 'settings'],
                    (result) => {
                        if (chrome.runtime.lastError) {
                            console.error('Error loading from chrome storage:', chrome.runtime.lastError);
                            reject(new Error(chrome.runtime.lastError.message));
                            return;
                        }
                        resolve(result);
                    }
                );
            } else {
                // Fallback for development outside extension environment
                console.warn('Chrome storage not available, using localStorage');
                try {
                    const data = {};
                    ['tasks', 'clipboardItems', 'workTimeSessions', 'timeTracker', 'archivedTaskLogs', 'settings'].forEach(key => {
                        const item = localStorage.getItem(key);
                        if (item) {
                            data[key] = JSON.parse(item);
                        }
                    });
                    resolve(data);
                } catch (e) {
                    console.error('Error loading from localStorage:', e);
                    reject(e);
                }
            }
        });
    },

    /**
     * Save application data
     * @param {Object} data - The data to save
     * @returns {Promise<void>}
     */
    saveData: (data) => {
        return new Promise((resolve, reject) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.set(data, () => {
                    if (chrome.runtime.lastError) {
                        console.error('Error saving to chrome storage:', chrome.runtime.lastError);
                        reject(new Error(chrome.runtime.lastError.message));
                        return;
                    }
                    resolve();
                });
            } else {
                // Fallback for local storage
                try {
                    Object.keys(data).forEach(key => {
                        localStorage.setItem(key, JSON.stringify(data[key]));
                    });
                    resolve();
                } catch (e) {
                    console.error('Error saving to localStorage:', e);
                    reject(e);
                }
            }
        });
    },

    /**
     * Load just settings
     * @returns {Promise<Object>}
     */
    loadSettings: () => {
        return new Promise((resolve, reject) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.get(['settings'], (result) => {
                    if (chrome.runtime.lastError) {
                        console.error('Error loading settings from chrome storage:', chrome.runtime.lastError);
                        reject(new Error(chrome.runtime.lastError.message));
                        return;
                    }
                    resolve(result.settings || {});
                });
            } else {
                try {
                    const item = localStorage.getItem('settings');
                    if (item) {
                        resolve(JSON.parse(item));
                    } else {
                        resolve({});
                    }
                } catch (e) {
                    console.error('Error loading settings from localStorage:', e);
                    reject(e);
                }
            }
        });
    },

    /**
     * Save just settings
     * @param {Object} settings 
     * @returns {Promise<void>}
     */
    saveSettings: (settings) => {
        return StorageService.saveData({ settings });
    }
};
