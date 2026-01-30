/**
 * Encryption utilities for storing sensitive data
 * Uses Web Crypto API with AES-GCM encryption
 * 
 * Passwords are encrypted using a key derived from:
 * - A unique installation ID (per browser profile)
 * - A random salt (stored with the encrypted data)
 */

/**
 * Get or create a unique installation ID for key derivation
 * This ID is unique per browser profile and never leaves the device
 * @returns {Promise<string>}
 */
async function getInstallationId() {
    return new Promise((resolve) => {
        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(['_installationId'], (result) => {
                if (result._installationId) {
                    resolve(result._installationId);
                } else {
                    const id = crypto.randomUUID();
                    chrome.storage.local.set({ _installationId: id });
                    resolve(id);
                }
            });
        } else {
            // Fallback for development
            let id = localStorage.getItem('_installationId');
            if (!id) {
                id = crypto.randomUUID();
                localStorage.setItem('_installationId', id);
            }
            resolve(id);
        }
    });
}

/**
 * Derive an encryption key from the installation ID and salt
 * Uses PBKDF2 with 100,000 iterations for key stretching
 * @param {Uint8Array} salt 
 * @returns {Promise<CryptoKey>}
 */
async function deriveKey(salt) {
    const installId = await getInstallationId();
    const encoder = new TextEncoder();
    
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(installId),
        'PBKDF2',
        false,
        ['deriveBits', 'deriveKey']
    );
    
    return crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt,
            iterations: 100000,
            hash: 'SHA-256'
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
}

/**
 * Encrypt a password for secure storage
 * @param {string} password - The plaintext password to encrypt
 * @returns {Promise<string>} - JSON string containing encrypted data
 */
export async function encryptPassword(password) {
    if (!password) {
        return '';
    }
    
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(salt);
    
    const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        encoder.encode(password)
    );
    
    // Convert to base64 for storage
    const saltB64 = btoa(String.fromCharCode(...salt));
    const ivB64 = btoa(String.fromCharCode(...iv));
    const dataB64 = btoa(String.fromCharCode(...new Uint8Array(encrypted)));
    
    return JSON.stringify({
        v: 1, // Version for future compatibility
        salt: saltB64,
        iv: ivB64,
        data: dataB64
    });
}

/**
 * Decrypt a previously encrypted password
 * @param {string} encryptedData - JSON string from encryptPassword
 * @returns {Promise<string>} - The decrypted plaintext password
 */
export async function decryptPassword(encryptedData) {
    if (!encryptedData) {
        return '';
    }
    
    try {
        const { salt, iv, data } = JSON.parse(encryptedData);
        
        // Convert from base64
        const saltBytes = Uint8Array.from(atob(salt), c => c.charCodeAt(0));
        const ivBytes = Uint8Array.from(atob(iv), c => c.charCodeAt(0));
        const dataBytes = Uint8Array.from(atob(data), c => c.charCodeAt(0));
        
        const key = await deriveKey(saltBytes);
        
        const decrypted = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: ivBytes },
            key,
            dataBytes
        );
        
        return new TextDecoder().decode(decrypted);
    } catch (error) {
        console.error('Failed to decrypt password:', error);
        return '';
    }
}

/**
 * Check if a string is an encrypted password (vs plaintext)
 * @param {string} value 
 * @returns {boolean}
 */
export function isEncrypted(value) {
    if (!value) return false;
    try {
        const parsed = JSON.parse(value);
        return parsed.v === 1 && parsed.salt && parsed.iv && parsed.data;
    } catch {
        return false;
    }
}
