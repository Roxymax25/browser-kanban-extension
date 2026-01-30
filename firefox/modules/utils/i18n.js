import { TRANSLATIONS } from '../config/translations.js';

let currentLanguage = 'de';

/**
 * Initialize the i18n module with a language
 * @param {string} lang 
 */
export function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        currentLanguage = lang;
    } else {
        console.warn(`Language ${lang} not found, falling back to 'de'`);
        currentLanguage = 'de';
    }
}

/**
 * Get translation for a key
 * @param {string} key 
 * @returns {string}
 */
export function t(key) {
    return TRANSLATIONS[currentLanguage][key] || TRANSLATIONS['de'][key] || key;
}

/**
 * Get the current language
 * @returns {string}
 */
export function getLanguage() {
    return currentLanguage;
}
