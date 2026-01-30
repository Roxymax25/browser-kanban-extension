/**
 * Helper functions
 */

/**
 * Escape HTML to prevent XSS
 * @param {string} text 
 * @returns {string}
 */
export function escapeHtml(text) {
    if (!text) return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

/**
 * Format a timestamp to a date string based on locale
 * @param {number} timestamp 
 * @param {string} locale 
 * @returns {string}
 */
export function formatDateTime(timestamp, locale = 'de-DE') {
    const date = new Date(timestamp);
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString(locale, options);
}

/**
 * Format a timestamp to a short date string
 * @param {number} timestamp 
 * @param {string} locale 
 * @returns {string}
 */
export function formatDate(timestamp, locale = 'de-DE') {
    const date = new Date(timestamp);
    const options = {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString(locale, options);
}

/**
 * Format duration in minutes to a readable string
 * @param {number} minutes 
 * @param {Function} t - translation function
 * @returns {string}
 */
export function formatDuration(minutes, t) {
    if (minutes < 60) {
        return `${minutes} ${t('min')}`;
    } else if (minutes < 1440) {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h} ${t('hours')} ${m} ${t('min')}`;
    } else {
        const d = Math.floor(minutes / 1440);
        const h = Math.floor((minutes % 1440) / 60);
        return `${d} ${t('days')} ${h} ${t('hours')}`;
    }
}

/**
 * Generate a unique ID
 * @returns {string}
 */
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Fuzzy match query in text
 * @param {string} query 
 * @param {string} text 
 * @returns {boolean}
 */
export function fuzzyMatch(query, text) {
    if (!query) return true;
    query = query.toLowerCase();
    text = text.toLowerCase();

    // Each character in query must exist in text
    let textCopy = text;
    for (const char of query) {
        const index = textCopy.indexOf(char);
        if (index === -1) {
            return false;
        }
        // Remove found character to handle duplicates
        textCopy = textCopy.slice(0, index) + textCopy.slice(index + 1);
    }
    return true;
}
