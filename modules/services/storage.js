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
        return new Promise((resolve) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.get(
                    ['tasks', 'clipboardItems', 'workTimeSessions', 'timeTracker', 'archivedTaskLogs', 'settings'],
                    (result) => {
                        resolve(result);
                    }
                );
            } else {
                // Fallback for development outside extension environment
                console.warn('Chrome storage not available, using localStorage');
                const data = {};
                ['tasks', 'clipboardItems', 'workTimeSessions', 'timeTracker', 'archivedTaskLogs', 'settings'].forEach(key => {
                    const item = localStorage.getItem(key);
                    if (item) {
                        try {
                            data[key] = JSON.parse(item);
                        } catch (e) {
                            console.error(`Error parsing ${key} from localStorage`, e);
                        }
                    }
                });
                resolve(data);
            }
        });
    },

    /**
     * Save application data
     * @param {Object} data - The data to save
     * @returns {Promise<void>}
     */
    saveData: (data) => {
        return new Promise((resolve) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.set(data, () => {
                    if (chrome.runtime.lastError) {
                        console.error('Error saving to chrome storage:', chrome.runtime.lastError);
                    }
                    resolve();
                });
            } else {
                // Fallback for local storage
                Object.keys(data).forEach(key => {
                    localStorage.setItem(key, JSON.stringify(data[key]));
                });
                resolve();
            }
        });
    },

    /**
     * Load just settings
     * @returns {Promise<Object>}
     */
    loadSettings: () => {
        return new Promise((resolve) => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.get(['settings'], (result) => {
                    resolve(result.settings || {});
                });
            } else {
                const item = localStorage.getItem('settings');
                if (item) {
                    try {
                        resolve(JSON.parse(item));
                    } catch (e) {
                        resolve({});
                    }
                } else {
                    resolve({});
                }
            }
        });
    },

    /**
     * Save just settings
     * @param {Object} settings 
     */
    saveSettings: (settings) => {
        return StorageService.saveData({ settings });
    }
};
