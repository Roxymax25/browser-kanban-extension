
// === modules/config/constants.js ===
/**
 * Application Constants
 * Centralized configuration values to avoid magic numbers
 */

// Clipboard limits
const MAX_CLIPBOARD_ITEMS = 50;
const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024; // 2MB

// UI timing (milliseconds)
const TOAST_DURATION_MS = 3000;
const DRAG_THROTTLE_MS = 50;
const MODAL_ANIMATION_MS = 300;

// Time tracker
const TIME_UPDATE_INTERVAL_MS = 1000;

// Date/time update interval
const DATETIME_UPDATE_INTERVAL_MS = 60000; // 1 minute


// === modules/config/icons.js ===
const ICONS = {
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    timer: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    trash: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
    arrow: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    file: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
    clip: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>',
    filePlus: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    pin: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>',
    archive: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="5" rx="2"></rect><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"></path><path d="M10 13h4"></path></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    play: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
    pause: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
    stop: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
};


// === modules/config/translations.js ===
const TRANSLATIONS = {
    de: {
        // Header
        dashboardTitle: 'Mein Dashboard',
        tasks: 'Aufgaben',

        // Columns
        todo: 'Zu erledigen',
        inProgress: 'In Bearbeitung',
        done: 'Erledigt',
        noTasks: 'Keine Aufgaben',

        // Clipboard
        clipboard: 'Zwischenablage',
        clipboardEmpty: 'Zwischenablage leer',
        clipboardPasteHint: 'Strg+V zum Einfügen',
        saveText: 'Text speichern',
        image: 'Bild',
        copy: 'Kopieren',
        task: 'Aufgabe',
        clipboardPlaceholder: 'Text hier einfügen oder tippen...\nStrg+V zum schnellen Einfügen\nBilder per Drag & Drop',

        // Task Modal
        newTask: 'Neue Aufgabe',
        editTask: 'Aufgabe bearbeiten',
        description: 'Beschreibung',
        taskPlaceholder: 'Was muss erledigt werden?\nShift+Enter zum Speichern',
        priority: 'Priorität',
        low: 'Niedrig',
        medium: 'Mittel',
        high: 'Hoch',
        statusHistory: 'Status-Verlauf',
        save: 'Speichern',
        delete: 'Löschen',
        cancel: 'Abbrechen',
        close: 'Schließen',

        // Info Modal
        additionalInfo: 'Zusätzliche Info',
        noteOrInfo: 'Notiz oder Zusatzinfo',
        infoPlaceholder: 'Zusätzliche Informationen eingeben...\nShift+Enter zum Speichern',

        // Worktime Modal
        worktimeLog: 'Arbeitszeit-Log',
        total: 'Gesamt',
        sessions: 'Sessions',
        noWorktimeRecorded: 'Noch keine Arbeitszeiten erfasst',
        deleteAll: 'Alle löschen',
        sessionNote: 'Notiz',
        sessionNotePlaceholder: 'Notiz hinzufügen...',
        noNote: 'Keine Notiz',
        toastNoteSaved: 'Notiz gespeichert',

        // Settings Modal
        settings: 'Einstellungen',
        language: 'Sprache / Language',
        colorPalette: 'Farbpalette wählen',

        // Time Tracker
        start: 'Start',
        pause: 'Pause',
        stop: 'Stop',
        resume: 'Weiter',
        log: 'Log',

        // Tooltips
        tooltipNewTask: 'Neue Aufgabe (Strg+N)',
        tooltipExport: 'Als Markdown exportieren',
        tooltipCopy: 'In Zwischenablage kopieren',
        tooltipInfo: 'Zusätzliche Info',
        tooltipDelete: 'Löschen',
        tooltipSettings: 'Einstellungen',

        // Theme
        themeLabel: 'Theme / Modus',
        themeDark: 'Dark',
        themeLight: 'Light',

        // Toast Messages
        toastCopied: 'In Zwischenablage kopiert!',
        toastCopyFailed: 'Kopieren fehlgeschlagen - bitte manuell kopieren',
        toastTaskDeleted: 'Aufgabe gelöscht',
        toastTaskUpdated: 'Aufgabe aktualisiert',
        toastTaskAdded: 'Aufgabe hinzugefügt',
        toastAddedAsTask: 'Als Aufgabe hinzugefügt!',
        toastDeleted: 'Gelöscht',
        toastClipboardSaved: 'In Zwischenablage gespeichert',
        toastSaved: 'Gespeichert',
        toastImageSaved: 'Bild gespeichert!',
        toastPastedImageSaved: 'Bild aus Zwischenablage gespeichert!',
        toastSelectImage: 'Bitte wähle eine Bilddatei',
        toastImageTooLarge: 'Bild zu groß (max. 2MB)',
        toastImageOpenedNewTab: 'Bild in neuem Tab geöffnet',
        toastEnterDescription: 'Bitte gib eine Beschreibung ein',
        toastInfoSaved: 'Info gespeichert',
        toastInfoRemoved: 'Info entfernt',
        toastInfoDeleted: 'Info gelöscht',
        toastTrackerStarted: 'Zeiterfassung gestartet',
        toastTrackerPaused: 'Zeiterfassung pausiert',
        toastTrackerResumed: 'Zeiterfassung fortgesetzt',
        toastWorktimeSaved: 'Arbeitszeit gespeichert:',
        toastEntryDeleted: 'Eintrag gelöscht',
        toastAllEntriesDeleted: 'Alle Einträge gelöscht',
        toastNoDoneTasks: 'Keine erledigten Aufgaben zum Exportieren',
        toastExported: 'Aufgaben als Markdown kopiert!',
        toastTextSaved: 'Text gespeichert!',
        toastMovedTo: 'Verschoben nach',
        toastPaletteSaved: 'Farbpalette gespeichert!',
        toastSettingsSaved: 'Einstellungen gespeichert!',

        // Duration
        min: 'Min.',
        hours: 'Std.',
        days: 'Tag(e)',

        // Export
        completedTasks: 'Erledigte Aufgaben',
        processingTime: 'Bearbeitungszeit',
        completedAt: 'Abgeschlossen',
        unknown: 'Unbekannt',

        // Archive & Logs
        tooltipArchive: 'Klick: Tasks archivieren | Doppelklick/Rechtsklick: Archiv-Logs öffnen',
        tooltipViewLogs: 'Archiv-Logs anzeigen',
        archiveLogs: 'Archiv-Logs',
        searchPlaceholder: 'Suchen...',
        noArchivedLogs: 'Keine archivierten Logs',
        toastArchived: 'Tasks archiviert',
        toastNoDoneTasksToArchive: 'Keine erledigten Tasks zum Archivieren',
        toastClipboardCleared: 'Zwischenablage geleert',
        confirmClearClipboard: 'Wirklich alle Einträge löschen?',

        // Archive Filters
        filterPriority: 'Priorität',
        filterTime: 'Zeitraum',
        filterAll: 'Alle',
        filterHigh: 'Hoch',
        filterMedium: 'Mittel',
        filterLow: 'Niedrig',
        filterToday: 'Heute',
        filterWeek: '7 Tage',
        filterMonth: '30 Tage',

        // Pin
        tooltipPin: 'Anpinnen',
        tooltipUnpin: 'Pin lösen',
        toastPinned: 'Task angepinnt',
        toastUnpinned: 'Pin gelöst',

        // Clear Clipboard
        tooltipClearClipboard: 'Zwischenablage leeren',
        toastPastedToClipboard: 'In Zwischenablage eingefügt',

        // Cloud Sync
        settingsCloudSync: 'Cloud-Synchronisierung',
        syncEnable: 'Synchronisierung aktivieren',
        syncServerUrl: 'Server URL',
        syncServerUrlHint: 'z.B. https://cloud.example.com/remote.php/dav/files/username/',
        syncUsername: 'Benutzername',
        syncPassword: 'Passwort',
        syncPasswordNote: 'Wird verschlüsselt lokal gespeichert',
        syncFilePath: 'Dateipfad',
        syncFilePathHint: 'Ordner wird automatisch erstellt',
        syncTestConnection: 'Verbindung testen',
        syncTesting: 'Teste...',
        syncTestSuccess: 'Verbindung erfolgreich!',
        syncTestFailed: 'Verbindung fehlgeschlagen',
        syncLastSync: 'Letzte Synchronisierung:',
        syncStatusConnected: 'Sync: Verbunden',
        syncStatusSyncing: 'Synchronisiere...',
        syncStatusError: 'Sync-Fehler',
        syncStatusOffline: 'Sync: Offline',
        syncComplete: 'Synchronisierung abgeschlossen',
        syncErrorMissingFields: 'Bitte Server-URL und Benutzername ausfüllen',
        syncErrorNoPassword: 'Bitte Passwort eingeben',
        syncDataUpdated: 'Daten aus der Cloud aktualisiert',
        syncPermissionDenied: 'Zugriff verweigert. Bitte erlauben Sie den Zugriff auf den Server.',
        syncPermissionRequired: 'Berechtigung erforderlich. Bitte klicken Sie erneut auf den Button.'
    },
    en: {
        // Header
        dashboardTitle: 'My Dashboard',
        tasks: 'Tasks',

        // Columns
        todo: 'To Do',
        inProgress: 'In Progress',
        done: 'Done',
        noTasks: 'No tasks',

        // Clipboard
        clipboard: 'Clipboard',
        clipboardEmpty: 'Clipboard empty',
        clipboardPasteHint: 'Ctrl+V to paste',
        saveText: 'Save text',
        image: 'Image',
        copy: 'Copy',
        task: 'Task',
        clipboardPlaceholder: 'Paste or type text here...\nCtrl+V to quickly paste\nDrag & drop images',

        // Task Modal
        newTask: 'New Task',
        editTask: 'Edit Task',
        description: 'Description',
        taskPlaceholder: 'What needs to be done?\nShift+Enter to save',
        priority: 'Priority',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        statusHistory: 'Status History',
        save: 'Save',
        delete: 'Delete',
        cancel: 'Cancel',
        close: 'Close',

        // Info Modal
        additionalInfo: 'Additional Info',
        noteOrInfo: 'Note or additional info',
        infoPlaceholder: 'Enter additional information...\nShift+Enter to save',

        // Worktime Modal
        worktimeLog: 'Work Time Log',
        total: 'Total',
        sessions: 'Sessions',
        noWorktimeRecorded: 'No work time recorded yet',
        deleteAll: 'Delete all',
        sessionNote: 'Note',
        sessionNotePlaceholder: 'Add a note...',
        noNote: 'No note',
        toastNoteSaved: 'Note saved',

        // Settings Modal
        settings: 'Settings',
        language: 'Language / Sprache',
        colorPalette: 'Choose color palette',

        // Time Tracker
        start: 'Start',
        pause: 'Pause',
        stop: 'Stop',
        resume: 'Resume',
        log: 'Log',

        // Tooltips
        tooltipNewTask: 'New Task (Ctrl+N)',
        tooltipExport: 'Export as Markdown',
        tooltipCopy: 'Copy to clipboard',
        tooltipInfo: 'Additional info',
        tooltipDelete: 'Delete',
        tooltipSettings: 'Settings',

        // Theme
        themeLabel: 'Theme / Mode',
        themeDark: 'Dark',
        themeLight: 'Light',

        // Toast Messages
        toastCopied: 'Copied to clipboard!',
        toastCopyFailed: 'Copy failed - please copy manually',
        toastTaskDeleted: 'Task deleted',
        toastTaskUpdated: 'Task updated',
        toastTaskAdded: 'Task added',
        toastAddedAsTask: 'Added as task!',
        toastDeleted: 'Deleted',
        toastClipboardSaved: 'Saved to clipboard',
        toastSaved: 'Saved',
        toastImageSaved: 'Image saved!',
        toastPastedImageSaved: 'Image from clipboard saved!',
        toastSelectImage: 'Please select an image file',
        toastImageTooLarge: 'Image too large (max. 2MB)',
        toastImageOpenedNewTab: 'Image opened in new tab',
        toastEnterDescription: 'Please enter a description',
        toastInfoSaved: 'Info saved',
        toastInfoRemoved: 'Info removed',
        toastInfoDeleted: 'Info deleted',
        toastTrackerStarted: 'Time tracking started',
        toastTrackerPaused: 'Time tracking paused',
        toastTrackerResumed: 'Time tracking resumed',
        toastWorktimeSaved: 'Work time saved:',
        toastEntryDeleted: 'Entry deleted',
        toastAllEntriesDeleted: 'All entries deleted',
        toastNoDoneTasks: 'No completed tasks to export',
        toastExported: 'Tasks copied as Markdown!',
        toastTextSaved: 'Text saved!',
        toastMovedTo: 'Moved to',
        toastPaletteSaved: 'Color palette saved!',
        toastSettingsSaved: 'Settings saved!',

        // Duration
        min: 'min',
        hours: 'hrs',
        days: 'day(s)',

        // Export
        completedTasks: 'Completed Tasks',
        processingTime: 'Processing time',
        completedAt: 'Completed',
        unknown: 'Unknown',

        // Archive & Logs
        tooltipArchive: 'Click: Archive tasks | Double-click/Right-click: Open archive logs',
        tooltipViewLogs: 'View archive logs',
        archiveLogs: 'Archive Logs',
        searchPlaceholder: 'Search...',
        noArchivedLogs: 'No archived logs',
        toastArchived: 'Tasks archived',
        toastNoDoneTasksToArchive: 'No completed tasks to archive',
        toastClipboardCleared: 'Clipboard cleared',
        confirmClearClipboard: 'Really delete all entries?',

        // Archive Filters
        filterPriority: 'Priority',
        filterTime: 'Time Period',
        filterAll: 'All',
        filterHigh: 'High',
        filterMedium: 'Medium',
        filterLow: 'Low',
        filterToday: 'Today',
        filterWeek: '7 Days',
        filterMonth: '30 Days',

        // Pin
        tooltipPin: 'Pin task',
        tooltipUnpin: 'Unpin task',
        toastPinned: 'Task pinned',
        toastUnpinned: 'Task unpinned',

        // Clear Clipboard
        tooltipClearClipboard: 'Clear clipboard',
        toastPastedToClipboard: 'Pasted to clipboard',

        // Cloud Sync
        settingsCloudSync: 'Cloud Sync',
        syncEnable: 'Enable synchronization',
        syncServerUrl: 'Server URL',
        syncServerUrlHint: 'e.g. https://cloud.example.com/remote.php/dav/files/username/',
        syncUsername: 'Username',
        syncPassword: 'Password',
        syncPasswordNote: 'Stored encrypted locally',
        syncFilePath: 'File path',
        syncFilePathHint: 'Folder will be created automatically',
        syncTestConnection: 'Test connection',
        syncTesting: 'Testing...',
        syncTestSuccess: 'Connection successful!',
        syncTestFailed: 'Connection failed',
        syncLastSync: 'Last sync:',
        syncStatusConnected: 'Sync: Connected',
        syncStatusSyncing: 'Syncing...',
        syncStatusError: 'Sync error',
        syncStatusOffline: 'Sync: Offline',
        syncComplete: 'Sync complete',
        syncErrorMissingFields: 'Please fill in server URL and username',
        syncErrorNoPassword: 'Please enter a password',
        syncDataUpdated: 'Data updated from cloud',
        syncPermissionDenied: 'Permission denied. Please allow access to the server.',
        syncPermissionRequired: 'Permission required. Please click the button again.'
    }
};


// === modules/config/colorPalettes.js ===
/**
 * Color Palettes Configuration
 * Centralized color palette definitions for theming
 */

const COLOR_PALETTES = {
    'sunset-orange': {
        name: 'Sunset Orange',
        accent1: '#e85d04',
        accent2: '#dc2f02',
        accent3: '#f48c06',
        accentSoft: 'rgba(232, 93, 4, 0.15)',
        accentGradient: 'linear-gradient(135deg, #e85d04 0%, #dc2f02 100%)',
        todoColor: '#dc2f02',
        progressColor: '#f48c06',
        doneColor: '#38b000',
        clipboardColor: '#e85d04',
        shadowGlow: '0 0 40px rgba(232, 93, 4, 0.2)',
        scrollbarThumb: 'rgba(232, 93, 4, 0.4)',
        scrollbarHover: 'rgba(232, 93, 4, 0.6)',
        logoFilter: 'hue-rotate(0deg)'
    },
    'ocean-blue': {
        name: 'Ocean Blue',
        accent1: '#0077b6',
        accent2: '#0096c7',
        accent3: '#00b4d8',
        accentSoft: 'rgba(0, 119, 182, 0.15)',
        accentGradient: 'linear-gradient(135deg, #0077b6 0%, #0096c7 100%)',
        todoColor: '#0077b6',
        progressColor: '#00b4d8',
        doneColor: '#38b000',
        clipboardColor: '#0096c7',
        shadowGlow: '0 0 40px rgba(0, 119, 182, 0.2)',
        scrollbarThumb: 'rgba(0, 119, 182, 0.4)',
        scrollbarHover: 'rgba(0, 119, 182, 0.6)',
        logoFilter: 'hue-rotate(180deg)'
    },
    'forest-green': {
        name: 'Forest Green',
        accent1: '#2d6a4f',
        accent2: '#40916c',
        accent3: '#52b788',
        accentSoft: 'rgba(45, 106, 79, 0.15)',
        accentGradient: 'linear-gradient(135deg, #2d6a4f 0%, #40916c 100%)',
        todoColor: '#2d6a4f',
        progressColor: '#52b788',
        doneColor: '#74c69d',
        clipboardColor: '#40916c',
        shadowGlow: '0 0 40px rgba(45, 106, 79, 0.2)',
        scrollbarThumb: 'rgba(45, 106, 79, 0.4)',
        scrollbarHover: 'rgba(45, 106, 79, 0.6)',
        logoFilter: 'hue-rotate(120deg)'
    },
    'royal-purple': {
        name: 'Royal Purple',
        accent1: '#7b2cbf',
        accent2: '#9d4edd',
        accent3: '#c77dff',
        accentSoft: 'rgba(123, 44, 191, 0.15)',
        accentGradient: 'linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%)',
        todoColor: '#9d4edd',
        progressColor: '#c77dff',
        doneColor: '#38b000',
        clipboardColor: '#7b2cbf',
        shadowGlow: '0 0 40px rgba(123, 44, 191, 0.2)',
        scrollbarThumb: 'rgba(123, 44, 191, 0.4)',
        scrollbarHover: 'rgba(123, 44, 191, 0.6)',
        logoFilter: 'hue-rotate(270deg)'
    },
    'cherry-blossom': {
        name: 'Cherry Blossom',
        accent1: '#ff758f',
        accent2: '#ff4d6d',
        accent3: '#ffb3c1',
        accentSoft: 'rgba(255, 117, 143, 0.15)',
        accentGradient: 'linear-gradient(135deg, #ff758f 0%, #ff4d6d 100%)',
        todoColor: '#ff4d6d',
        progressColor: '#ffb3c1',
        doneColor: '#38b000',
        clipboardColor: '#ff758f',
        shadowGlow: '0 0 40px rgba(255, 117, 143, 0.2)',
        scrollbarThumb: 'rgba(255, 117, 143, 0.4)',
        scrollbarHover: 'rgba(255, 117, 143, 0.6)',
        logoFilter: 'hue-rotate(330deg)'
    },
    'midnight-gold': {
        name: 'Midnight Gold',
        accent1: '#fca311',
        accent2: '#e5a000',
        accent3: '#ffbe0b',
        accentSoft: 'rgba(252, 163, 17, 0.15)',
        accentGradient: 'linear-gradient(135deg, #fca311 0%, #e5a000 100%)',
        todoColor: '#e5a000',
        progressColor: '#ffbe0b',
        doneColor: '#38b000',
        clipboardColor: '#fca311',
        shadowGlow: '0 0 40px rgba(252, 163, 17, 0.2)',
        scrollbarThumb: 'rgba(252, 163, 17, 0.4)',
        scrollbarHover: 'rgba(252, 163, 17, 0.6)',
        logoFilter: 'hue-rotate(30deg)'
    }
};


// === modules/utils/helpers.js ===
/**
 * Helper functions
 */

/**
 * Escape HTML to prevent XSS
 * @param {string} text 
 * @returns {string}
 */
function escapeHtml(text) {
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
function formatDateTime(timestamp, locale = 'de-DE') {
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
function formatDate(timestamp, locale = 'de-DE') {
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
function formatDuration(minutes, t) {
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
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Fuzzy match query in text
 * @param {string} query 
 * @param {string} text 
 * @returns {boolean}
 */
function fuzzyMatch(query, text) {
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


// === modules/utils/i18n.js ===


let currentLanguage = 'de';

/**
 * Initialize the i18n module with a language
 * @param {string} lang 
 */
function setLanguage(lang) {
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
function t(key) {
    return TRANSLATIONS[currentLanguage][key] || TRANSLATIONS['de'][key] || key;
}

/**
 * Get the current language
 * @returns {string}
 */
function getLanguage() {
    return currentLanguage;
}


// === modules/services/storage.js ===
/**
 * Storage Service
 * Handles interactions with Chrome's storage API
 */

const StorageService = {
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


// === modules/services/ArchiveService.js ===
/**
 * ArchiveService Module
 * Handles task archiving and archive log display
 */





class ArchiveService {
    /**
     * @param {Object} options
     * @param {Function} options.onSave - Callback when data needs to be saved
     * @param {Function} options.showToast - Toast notification function
     * @param {Function} options.getTasks - Get current tasks
     * @param {Function} options.setTasks - Set tasks after archiving
     * @param {Function} options.renderTasks - Re-render task list
     * @param {Function} options.getStatusLabel - Get localized status label
     * @param {Function} options.getPriorityLabel - Get localized priority label
     */
    constructor(options) {
        this.onSave = options.onSave;
        this.showToast = options.showToast;
        this.getTasks = options.getTasks;
        this.setTasks = options.setTasks;
        this.renderTasks = options.renderTasks;
        this.getStatusLabel = options.getStatusLabel;
        this.getPriorityLabel = options.getPriorityLabel;

        // State
        this.archivedLogs = [];
        this.priorityFilter = 'all';
        this.timeFilter = 'all';

        // DOM Elements
        this.modal = document.getElementById('archive-logs-modal');
        this.closeBtn = document.querySelector('.archive-logs-close-btn');
        this.searchInput = document.getElementById('archive-search-input');
        this.entriesEl = document.getElementById('archive-logs-entries');

        this.bindEvents();
    }

    /**
     * Set archived logs from storage
     */
    setArchivedLogs(logs) {
        this.archivedLogs = logs || [];
    }

    /**
     * Get current archived logs
     */
    getArchivedLogs() {
        return this.archivedLogs;
    }

    /**
     * Archive all done tasks
     */
    archiveDoneTasks() {
        const tasks = this.getTasks();
        const doneTasks = tasks.filter(t => t.status === 'done');

        if (doneTasks.length === 0) {
            this.showToast(t('toastNoDoneTasksToArchive'), 'info');
            return;
        }

        // Archive each done task with its full history
        doneTasks.forEach(task => {
            this.archivedLogs.push({
                id: task.id,
                content: task.content,
                priority: task.priority,
                additionalInfo: task.additionalInfo || '',
                createdAt: task.createdAt || parseInt(task.id),
                archivedAt: Date.now(),
                history: task.history || []
            });
        });

        // Remove done tasks from active tasks
        const remainingTasks = tasks.filter(t => t.status !== 'done');
        this.setTasks(remainingTasks);

        this.onSave();
        this.renderTasks();
        this.showToast(`${doneTasks.length} ${t('toastArchived')}`, 'success');
    }

    /**
     * Open the archive logs modal
     */
    openModal() {
        // Reset filters
        this.priorityFilter = 'all';
        this.timeFilter = 'all';

        // Reset filter UI
        document.querySelectorAll('.archive-filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.priority === 'all' || btn.dataset.time === 'all') {
                btn.classList.add('active');
            }
        });

        // Reset search
        this.searchInput.value = '';

        this.renderLogs('');
        this.modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.modal.classList.add('visible');
        });
        setTimeout(() => {
            this.searchInput.focus();
        }, 100);
    }

    /**
     * Close the archive logs modal
     */
    closeModal() {
        this.modal.classList.remove('visible');
        setTimeout(() => {
            this.modal.classList.add('hidden');
        }, 300);
    }

    /**
     * Render filtered archive logs
     */
    renderLogs(searchQuery) {
        this.entriesEl.innerHTML = '';

        // Get current filter values
        const now = Date.now();
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const weekAgo = now - (7 * 24 * 60 * 60 * 1000);
        const monthAgo = now - (30 * 24 * 60 * 60 * 1000);

        // Filter by fuzzy search, priority, and time
        const filteredLogs = this.archivedLogs.filter(log => {
            // Fuzzy search filter
            const matchesSearch = fuzzyMatch(searchQuery, log.content) ||
                fuzzyMatch(searchQuery, log.additionalInfo || '');

            // Priority filter
            const matchesPriority = this.priorityFilter === 'all' ||
                (log.priority || 'medium') === this.priorityFilter;

            // Time filter
            let matchesTime = true;
            if (this.timeFilter === 'today') {
                matchesTime = log.archivedAt >= todayStart.getTime();
            } else if (this.timeFilter === 'week') {
                matchesTime = log.archivedAt >= weekAgo;
            } else if (this.timeFilter === 'month') {
                matchesTime = log.archivedAt >= monthAgo;
            }

            return matchesSearch && matchesPriority && matchesTime;
        });

        if (filteredLogs.length === 0) {
            this.entriesEl.innerHTML = `
                <div class="archive-empty-state">
                    ${ICONS.archive}
                    <div>${t('noArchivedLogs')}</div>
                </div>
            `;
            return;
        }

        // Sort by archivedAt descending (newest first)
        const sortedLogs = [...filteredLogs].sort((a, b) => b.archivedAt - a.archivedAt);

        sortedLogs.forEach(log => {
            const entry = document.createElement('div');
            entry.className = 'archive-log-entry';

            // Build history HTML
            let historyHtml = '';
            if (log.history && log.history.length > 0) {
                historyHtml = `
                    <div class="archive-log-history">
                        <div class="archive-log-history-title">${t('statusHistory')}</div>
                        ${log.history.map(h => `
                            <div class="archive-log-history-entry">
                                ${ICONS.arrow} ${this.getStatusLabel(h.status)} - ${formatDateTime(h.timestamp)}
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            entry.innerHTML = `
                <div class="archive-log-content">${escapeHtml(log.content)}</div>
                <div class="archive-log-meta">
                    <span>${ICONS.calendar} ${t('completedAt')}: ${formatDateTime(log.archivedAt)}</span>
                    <span class="task-priority priority-${log.priority || 'medium'}">${this.getPriorityLabel(log.priority)}</span>
                </div>
                ${log.additionalInfo ? `<div class="task-additional-info">${ICONS.info} ${escapeHtml(log.additionalInfo)}</div>` : ''}
                ${historyHtml}
            `;

            this.entriesEl.appendChild(entry);
        });
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        // Fuzzy search input
        this.searchInput.addEventListener('input', (e) => {
            this.renderLogs(e.target.value);
        });

        // Priority filter buttons
        const priorityFilterBtns = document.querySelectorAll('#archive-priority-filter .archive-filter-btn');
        priorityFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                priorityFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.priorityFilter = btn.dataset.priority;
                this.renderLogs(this.searchInput.value);
            });
        });

        // Time filter buttons
        const timeFilterBtns = document.querySelectorAll('#archive-time-filter .archive-filter-btn');
        timeFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                timeFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.timeFilter = btn.dataset.time;
                this.renderLogs(this.searchInput.value);
            });
        });
    }
}


// === modules/services/sync/BaseSyncProvider.js ===
/**
 * Base Sync Provider
 * Abstract class that defines the interface for all sync providers
 * (WebDAV, Google Drive, Dropbox, etc.)
 */

class BaseSyncProvider {
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


// === modules/services/sync/crypto.js ===
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
async function encryptPassword(password) {
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
async function decryptPassword(encryptedData) {
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
function isEncrypted(value) {
    if (!value) return false;
    try {
        const parsed = JSON.parse(value);
        return parsed.v === 1 && parsed.salt && parsed.iv && parsed.data;
    } catch {
        return false;
    }
}


// === modules/services/sync/WebDAVProvider.js ===
/**
 * WebDAV Sync Provider
 * Implements sync functionality for WebDAV servers (Nextcloud, ownCloud, etc.)
 */


class WebDAVProvider extends BaseSyncProvider {
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
     * Extract origin pattern from server URL for permission request
     * @param {string} url - The server URL
     * @returns {string} - Origin pattern like "https://example.com/*"
     */
    _getOriginPattern(url) {
        try {
            const urlObj = new URL(url);
            return `${urlObj.protocol}//${urlObj.host}/*`;
        } catch (e) {
            // Fallback: try to extract manually
            const match = url.match(/^(https?:\/\/[^\/]+)/);
            return match ? `${match[1]}/*` : null;
        }
    }

    /**
     * Check if we have permission to access the server URL
     * @returns {Promise<boolean>}
     */
    async hasPermission() {
        const origin = this._getOriginPattern(this.config.serverUrl);
        if (!origin) return false;
        
        try {
            return await chrome.permissions.contains({
                origins: [origin]
            });
        } catch (e) {
            console.error('Error checking permission:', e);
            return false;
        }
    }

    /**
     * Request permission to access the server URL
     * Must be called from a user gesture (click handler)
     * @returns {Promise<boolean>}
     */
    async requestPermission() {
        const origin = this._getOriginPattern(this.config.serverUrl);
        if (!origin) {
            this.lastError = new Error('Invalid server URL');
            return false;
        }
        
        try {
            const granted = await chrome.permissions.request({
                origins: [origin]
            });
            
            if (!granted) {
                this.lastError = new Error('Permission denied by user');
            }
            
            return granted;
        } catch (e) {
            console.error('Error requesting permission:', e);
            this.lastError = e;
            return false;
        }
    }

    /**
     * Ensure we have permission before making requests
     * @returns {Promise<void>}
     * @throws {Error} If permission is not granted
     */
    async _ensurePermission() {
        const hasPermission = await this.hasPermission();
        if (!hasPermission) {
            throw new Error('PERMISSION_REQUIRED');
        }
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
            
            // Check permission first
            await this._ensurePermission();
            
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


// === modules/services/sync/SyncService.js ===
/**
 * Sync Service
 * Main orchestrator for cloud synchronization
 * Handles provider management, debouncing, and conflict resolution
 */


// Sync status constants
const SyncStatus = {
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

class SyncService {
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
const syncService = new SyncService();


// === modules/ui/ClipboardPanel.js ===
/**
 * ClipboardPanel Module
 * Handles clipboard management functionality
 */


class ClipboardPanel {
    /**
     * @param {Object} options
     * @param {Function} options.onSave - Callback when data needs to be saved
     * @param {Function} options.showToast - Toast notification function
     * @param {Function} options.onCreateTask - Callback to create task from clipboard item
     */
    constructor(options) {
        this.onSave = options.onSave;
        this.showToast = options.showToast;
        this.onCreateTask = options.onCreateTask;

        // State
        this.items = [];

        // DOM Elements
        this.input = document.getElementById('clipboard-input');
        this.addBtn = document.getElementById('add-clipboard-btn');
        this.container = document.getElementById('clipboard-items');
        this.imageUploadBtn = document.getElementById('image-upload-btn');
        this.imageInput = document.getElementById('image-input');
        this.panel = document.querySelector('.clipboard-panel');
        this.clearBtn = document.getElementById('clear-clipboard-btn');

        this.confirmModal = null; // Will be set externally

        this.bindEvents();
    }

    /**
     * Set a confirm modal handler
     */
    setConfirmModal(confirmFn) {
        this.confirmModal = confirmFn;
    }

    /**
     * Set items from storage
     */
    setItems(items) {
        this.items = items || [];
    }

    /**
     * Get current items
     */
    getItems() {
        return this.items;
    }

    /**
     * Add a new clipboard item
     */
    addItem(content, type = 'text') {
        if (!content || (type === 'text' && !content.trim())) return;

        const newItem = {
            id: generateId(),
            content: type === 'text' ? content.trim() : content,
            type: type,
            createdAt: Date.now()
        };

        this.items.unshift(newItem);
        if (this.items.length > MAX_CLIPBOARD_ITEMS) {
            this.items.pop();
        }
        this.onSave();
        this.render();
    }

    /**
     * Render clipboard items
     */
    render() {
        this.container.innerHTML = '';

        if (this.items.length === 0) {
            this.container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">${ICONS.clip}</div>
                    <div class="empty-state-text">${t('clipboardEmpty')}<br><small>${t('clipboardPasteHint')}</small></div>
                </div>
            `;
            return;
        }

        this.items.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'clipboard-item';

            let contentHtml = '';
            if (item.type === 'image') {
                if (item.content && item.content.startsWith('data:image/')) {
                    contentHtml = `<img src="${item.content}" class="clipboard-image" alt="${t('image')}"/>`;
                } else {
                    contentHtml = `<div class="clipboard-item-content">${t('invalidImage') || 'Invalid image'}</div>`;
                }
            } else {
                contentHtml = `<div class="clipboard-item-content">${escapeHtml(item.content)}</div>`;
            }

            itemEl.innerHTML = `
                ${contentHtml}
                <div class="clipboard-item-meta">${ICONS.calendar} ${formatDateTime(item.createdAt || Date.now())}</div>
                <div class="clipboard-item-actions">
                    <button class="clipboard-item-btn copy">${ICONS.copy} ${t('copy')}</button>
                    ${item.type !== 'image' ? `<button class="clipboard-item-btn task">${ICONS.filePlus} ${t('task')}</button>` : ''}
                    <button class="clipboard-item-btn delete">${ICONS.trash}</button>
                </div>
            `;

            // Copy button
            itemEl.querySelector('.copy').addEventListener('click', () => {
                if (item.type === 'image') {
                    this.copyImageToClipboard(item.content);
                } else {
                    this.copyToClipboard(item.content);
                }
                this.showToast(t('toastCopied'), 'success');
            });

            // Add as task button (only for text)
            const taskBtn = itemEl.querySelector('.task');
            if (taskBtn) {
                taskBtn.addEventListener('click', () => {
                    this.onCreateTask(item.content);
                    this.showToast(t('toastAddedAsTask'), 'success');
                });
            }

            // Delete button
            itemEl.querySelector('.delete').addEventListener('click', () => {
                this.items.splice(index, 1);
                this.onSave();
                this.render();
                this.showToast(t('toastDeleted'), 'info');
            });

            // Click to copy
            itemEl.addEventListener('click', (e) => {
                if (e.target.closest('.clipboard-item-btn')) return;
                if (item.type === 'image') {
                    this.copyImageToClipboard(item.content);
                } else {
                    this.copyToClipboard(item.content);
                }
                this.showToast(t('toastCopied'), 'success');
            });

            this.container.appendChild(itemEl);
        });
    }

    /**
     * Copy text to clipboard
     */
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
            this.showToast(t('toastCopyFailed') || 'Copy failed - please copy manually', 'error');
        }
    }

    /**
     * Copy image to clipboard
     */
    async copyImageToClipboard(dataUrl) {
        try {
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            await navigator.clipboard.write([
                new ClipboardItem({ [blob.type]: blob })
            ]);
        } catch (err) {
            window.open(dataUrl, '_blank');
            this.showToast(t('toastImageOpenedNewTab'), 'info');
        }
    }

    /**
     * Handle image file upload
     */
    handleImageUpload(file) {
        if (!file || !file.type.startsWith('image/')) {
            this.showToast(t('toastSelectImage'), 'error');
            return;
        }

        if (file.size > MAX_IMAGE_SIZE_BYTES) {
            this.showToast(t('toastImageTooLarge'), 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.addItem(e.target.result, 'image');
            this.showToast(t('toastImageSaved'), 'success');
        };
        reader.readAsDataURL(file);
    }

    /**
     * Handle image from blob (for paste)
     */
    handleImageFromBlob(blob) {
        if (blob.size > MAX_IMAGE_SIZE_BYTES) {
            this.showToast(t('toastImageTooLarge'), 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.addItem(e.target.result, 'image');
            this.showToast(t('toastPastedImageSaved'), 'success');
        };
        reader.readAsDataURL(blob);
    }

    /**
     * Clear all clipboard items
     */
    async clearAll() {
        if (this.items.length === 0) return;

        if (this.confirmModal) {
            const confirmed = await this.confirmModal(
                t('deleteAll'),
                t('confirmClearClipboard'),
                t('deleteAll'),
                t('cancel')
            );

            if (!confirmed) return;
        }

        this.items = [];
        this.onSave();
        this.render();
        this.showToast(t('toastClipboardCleared'), 'info');
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Add text button
        this.addBtn.addEventListener('click', () => {
            this.addItem(this.input.value, 'text');
            this.input.value = '';
            this.showToast(t('toastClipboardSaved'), 'success');
        });

        // Ctrl+Enter to save
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.addItem(this.input.value, 'text');
                this.input.value = '';
                this.showToast(t('toastSaved'), 'success');
            }
        });

        // Image upload button
        this.imageUploadBtn.addEventListener('click', () => {
            this.imageInput.click();
        });

        // Image input change
        this.imageInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                this.handleImageUpload(e.target.files[0]);
                e.target.value = '';
            }
        });

        // Clear all button
        this.clearBtn.addEventListener('click', () => this.clearAll());

        // Drag and drop images
        this.panel.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.panel.classList.add('drag-hover');
        });

        this.panel.addEventListener('dragleave', () => {
            this.panel.classList.remove('drag-hover');
        });

        this.panel.addEventListener('drop', (e) => {
            e.preventDefault();
            this.panel.classList.remove('drag-hover');

            const files = e.dataTransfer.files;
            if (files.length > 0 && files[0].type.startsWith('image/')) {
                this.handleImageUpload(files[0]);
            }
        });
    }
}


// === modules/ui/TimeTracker.js ===
/**
 * TimeTracker Module
 * Handles work time tracking functionality
 */





class TimeTracker {
    /**
     * @param {Object} options
     * @param {Function} options.onSave - Callback when data needs to be saved
     * @param {Function} options.onSessionAdded - Callback when a session is added
     * @param {Function} options.showToast - Toast notification function
     * @param {Function} options.getLanguage - Get current language
     */
    constructor(options) {
        this.onSave = options.onSave;
        this.onSessionAdded = options.onSessionAdded;
        this.showToast = options.showToast;
        this.getLanguage = options.getLanguage;

        // State
        this.sessions = [];
        this.state = {
            isRunning: false,
            isPaused: false,
            startTime: null,
            pauseStartTime: null,
            totalPausedTime: 0
        };
        this.interval = null;

        // DOM Elements
        this.timeEl = document.getElementById('tracker-time');
        this.display = document.querySelector('.tracker-display');
        this.startBtn = document.getElementById('tracker-start-btn');
        this.pauseBtn = document.getElementById('tracker-pause-btn');
        this.logBtn = document.getElementById('tracker-log-btn');
        this.modal = document.getElementById('worktime-modal');
        this.closeBtn = document.querySelector('.worktime-close-btn');
        this.entriesEl = document.getElementById('worktime-entries');
        this.summaryEl = document.getElementById('worktime-summary');
        this.clearBtn = document.getElementById('clear-worktime-btn');

        this.bindEvents();
    }

    /**
     * Set sessions from storage
     */
    setSessions(sessions) {
        this.sessions = sessions || [];
    }

    /**
     * Get current sessions
     */
    getSessions() {
        return this.sessions;
    }

    /**
     * Set state from storage (for resume)
     */
    setState(state) {
        if (state) {
            this.state = { ...this.state, ...state };
        }
    }

    /**
     * Get current state
     */
    getState() {
        return this.state;
    }

    /**
     * Resume tracker from storage if it was running
     */
    resumeFromStorage() {
        if (this.state.isRunning) {
            this.updateUI();
            if (!this.state.isPaused) {
                this.interval = setInterval(() => this.updateDisplay(), 1000);
            }
            this.updateDisplay();
        }
    }

    /**
     * Start the tracker
     */
    start() {
        this.state.isRunning = true;
        this.state.isPaused = false;
        this.state.startTime = Date.now();
        this.state.totalPausedTime = 0;
        this.state.pauseStartTime = null;

        this.updateUI();
        this.interval = setInterval(() => this.updateDisplay(), 1000);
        this.onSave();
        this.showToast(t('toastTrackerStarted'), 'success');
    }

    /**
     * Stop the tracker and save session
     */
    stop() {
        if (!this.state.isRunning) return;

        const endTime = Date.now();
        const duration = endTime - this.state.startTime - this.state.totalPausedTime;

        // Save session
        const session = {
            id: generateId(),
            startTime: this.state.startTime,
            endTime: endTime,
            duration: duration,
            pausedTime: this.state.totalPausedTime
        };
        this.sessions.unshift(session);

        // Reset state
        this.state.isRunning = false;
        this.state.isPaused = false;
        this.state.startTime = null;
        this.state.totalPausedTime = 0;
        this.state.pauseStartTime = null;

        clearInterval(this.interval);
        this.interval = null;

        this.updateUI();
        this.timeEl.textContent = '00:00:00';
        this.onSave();
        this.showToast(`${t('toastWorktimeSaved')} ${this.formatTime(duration)}`, 'success');
    }

    /**
     * Pause the tracker
     */
    pause() {
        if (!this.state.isRunning || this.state.isPaused) return;

        this.state.isPaused = true;
        this.state.pauseStartTime = Date.now();

        clearInterval(this.interval);
        this.interval = null;

        this.updateUI();
        this.onSave();
        this.showToast(t('toastTrackerPaused'), 'info');
    }

    /**
     * Resume the tracker from pause
     */
    resume() {
        if (!this.state.isRunning || !this.state.isPaused) return;

        this.state.totalPausedTime += Date.now() - this.state.pauseStartTime;
        this.state.isPaused = false;
        this.state.pauseStartTime = null;

        this.interval = setInterval(() => this.updateDisplay(), 1000);

        this.updateUI();
        this.onSave();
        this.showToast(t('toastTrackerResumed'), 'success');
    }

    /**
     * Update the time display
     */
    updateDisplay() {
        if (!this.state.isRunning) return;

        let elapsed = Date.now() - this.state.startTime - this.state.totalPausedTime;
        if (this.state.isPaused && this.state.pauseStartTime) {
            elapsed = this.state.pauseStartTime - this.state.startTime - this.state.totalPausedTime;
        }

        this.timeEl.textContent = this.formatTime(elapsed);
    }

    /**
     * Update UI based on current state
     */
    updateUI() {
        if (this.state.isRunning) {
            this.startBtn.innerHTML = `${ICONS.stop} Stop`;
            this.startBtn.classList.add('running');
            this.pauseBtn.disabled = false;

            if (this.state.isPaused) {
                this.display.classList.remove('running');
                this.display.classList.add('paused');
                this.pauseBtn.innerHTML = `${ICONS.play} ${t('resume') || 'Weiter'}`;
                this.pauseBtn.classList.add('paused');
            } else {
                this.display.classList.add('running');
                this.display.classList.remove('paused');
                this.pauseBtn.innerHTML = `${ICONS.pause} Pause`;
                this.pauseBtn.classList.remove('paused');
            }
        } else {
            this.startBtn.innerHTML = `${ICONS.play} Start`;
            this.startBtn.classList.remove('running');
            this.pauseBtn.disabled = true;
            this.pauseBtn.classList.remove('paused');
            this.display.classList.remove('running', 'paused');
            this.pauseBtn.innerHTML = `${ICONS.pause} Pause`;
        }
    }

    /**
     * Format milliseconds to HH:MM:SS
     */
    formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    /**
     * Open the worktime modal
     */
    openModal() {
        this.renderEntries();
        this.modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.modal.classList.add('visible');
        });
    }

    /**
     * Close the worktime modal
     */
    closeModal() {
        this.modal.classList.remove('visible');
        setTimeout(() => {
            this.modal.classList.add('hidden');
        }, 300);
    }

    /**
     * Render worktime entries
     */
    renderEntries() {
        const locale = this.getLanguage() === 'en' ? 'en-GB' : 'de-DE';

        // Calculate summary
        const totalDuration = this.sessions.reduce((sum, s) => sum + s.duration, 0);
        const sessionCount = this.sessions.length;

        this.summaryEl.innerHTML = `
            <div class="summary-item">
                <div class="summary-label">${t('total')}</div>
                <div class="summary-value">${this.formatTime(totalDuration)}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">${t('sessions')}</div>
                <div class="summary-value">${sessionCount}</div>
            </div>
        `;

        if (this.sessions.length === 0) {
            this.entriesEl.innerHTML = `
                <div class="worktime-empty">
                    ${ICONS.clock}
                    <div>${t('noWorktimeRecorded')}</div>
                </div>
            `;
            return;
        }

        let html = '';
        this.sessions.forEach((session, index) => {
            const startDate = new Date(session.startTime);
            const endDate = new Date(session.endTime);
            const dateStr = startDate.toLocaleDateString(locale, { weekday: 'short', day: '2-digit', month: '2-digit', year: '2-digit' });
            const startTimeStr = startDate.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
            const endTimeStr = endDate.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
            const noteValue = session.note || '';
            const noteDisplay = noteValue || t('sessionNotePlaceholder');
            const noteClass = noteValue ? 'has-note' : 'no-note';

            html += `
                <div class="worktime-entry" data-index="${index}" data-id="${session.id}">
                    <div class="worktime-entry-main">
                        <div class="worktime-entry-info">
                            <div class="worktime-entry-date">${dateStr}</div>
                            <div class="worktime-entry-times">${startTimeStr} - ${endTimeStr}</div>
                        </div>
                        <div class="worktime-entry-note ${noteClass}" data-id="${session.id}" title="${t('sessionNote')}">
                            <span class="note-display">${escapeHtml(noteDisplay)}</span>
                            <input type="text" class="note-input hidden" value="${escapeHtml(noteValue)}" placeholder="${t('sessionNotePlaceholder')}" />
                        </div>
                    </div>
                    <div class="worktime-entry-actions">
                        <div class="worktime-entry-duration">${this.formatTime(session.duration)}</div>
                        <button class="worktime-entry-delete" data-id="${session.id}">
                            ${ICONS.trash}
                        </button>
                    </div>
                </div>
            `;
        });
        this.entriesEl.innerHTML = html;

        // Add delete listeners
        this.entriesEl.querySelectorAll('.worktime-entry-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                this.sessions = this.sessions.filter(s => s.id !== id);
                this.onSave();
                this.renderEntries();
                this.showToast(t('toastEntryDeleted'), 'info');
            });
        });

        // Add note editing listeners
        this.entriesEl.querySelectorAll('.worktime-entry-note').forEach(noteEl => {
            const noteDisplay = noteEl.querySelector('.note-display');
            const noteInput = noteEl.querySelector('.note-input');
            const sessionId = noteEl.dataset.id;

            noteEl.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!noteInput.classList.contains('hidden')) return;

                noteDisplay.classList.add('hidden');
                noteInput.classList.remove('hidden');
                noteInput.focus();
                noteInput.select();
            });

            noteInput.addEventListener('blur', () => {
                this.saveSessionNote(sessionId, noteInput.value);
            });

            noteInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    noteInput.blur();
                } else if (e.key === 'Escape') {
                    const session = this.sessions.find(s => s.id === sessionId);
                    noteInput.value = session?.note || '';
                    noteInput.blur();
                }
            });
        });
    }

    /**
     * Save a note to a session
     */
    saveSessionNote(sessionId, note) {
        const session = this.sessions.find(s => s.id === sessionId);
        if (session) {
            session.note = note.trim();
            this.onSave();
            this.renderEntries();
            if (note.trim()) {
                this.showToast(t('toastNoteSaved'), 'success');
            }
        }
    }

    /**
     * Clear all worktime entries
     */
    clearAll() {
        if (this.sessions.length === 0) return;
        this.sessions = [];
        this.onSave();
        this.renderEntries();
        this.showToast(t('toastAllEntriesDeleted'), 'info');
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        this.startBtn.addEventListener('click', () => {
            if (this.state.isRunning) {
                this.stop();
            } else {
                this.start();
            }
        });

        this.pauseBtn.addEventListener('click', () => {
            if (this.state.isPaused) {
                this.resume();
            } else {
                this.pause();
            }
        });

        this.logBtn.addEventListener('click', () => this.openModal());

        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        this.clearBtn.addEventListener('click', () => this.clearAll());
    }
}


// === script.js (main) ===
const icons = ICONS;


document.addEventListener('DOMContentLoaded', () => {
    // SVG Icon templates


    // DOM Elements - Tasks
    const todoList = document.querySelector('#todo .task-list');
    const inProgressList = document.querySelector('#in-progress .task-list');
    const doneList = document.querySelector('#done .task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const modal = document.getElementById('task-modal');
    const closeBtn = document.querySelector('.close-btn');
    const saveTaskBtn = document.getElementById('save-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const taskInput = document.getElementById('task-input');
    const modalTitle = document.getElementById('modal-title');
    const priorityOptions = document.querySelectorAll('.priority-option');

    // DOM Elements - Clipboard
    const clipboardInput = document.getElementById('clipboard-input');
    const addClipboardBtn = document.getElementById('add-clipboard-btn');
    const clipboardItemsContainer = document.getElementById('clipboard-items');
    const imageUploadBtn = document.getElementById('image-upload-btn');
    const imageInput = document.getElementById('image-input');

    // DOM Elements - Stats
    const todoCount = document.getElementById('todo-count');
    const progressCount = document.getElementById('progress-count');
    const doneCount = document.getElementById('done-count');
    const taskStats = document.getElementById('task-stats');
    const currentDateEl = document.getElementById('current-date');
    const currentTimeEl = document.getElementById('current-time');

    // DOM Elements - Task History in Modal
    const taskHistorySection = document.getElementById('task-history-section');
    const taskHistoryList = document.getElementById('task-history-list');

    // DOM Elements - Info Modal
    const infoModal = document.getElementById('info-modal');
    const infoCloseBtn = document.querySelector('.info-close-btn');
    const infoInput = document.getElementById('info-input');
    const saveInfoBtn = document.getElementById('save-info-btn');
    const clearInfoBtn = document.getElementById('clear-info-btn');

    // DOM Elements - Settings Modal
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const settingsCloseBtn = document.querySelector('.settings-close-btn');
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const cancelSettingsBtn = document.getElementById('cancel-settings-btn');
    const paletteGrid = document.getElementById('palette-grid');
    const paletteOptions = paletteGrid.querySelectorAll('.palette-option');

    // State
    let tasks = [];
    let clipboardItems = [];
    let currentDragItem = null;
    let editingTaskId = null;
    let editingInfoTaskId = null;
    let selectedPriority = 'medium';

    // Settings State
    let selectedPalette = 'sunset-orange';
    let selectedLanguage = 'de';
    let selectedTheme = 'dark';
    let confirmResolve = null;

    // Color Palettes now imported from './modules/config/colorPalettes.js'
    const colorPalettes = COLOR_PALETTES;

    // ============ MODULE INSTANCES ============

    // TimeTracker Module
    const timeTrackerModule = new TimeTracker({
        onSave: saveData,
        showToast: showToast,
        getLanguage: () => selectedLanguage
    });

    // ClipboardPanel Module
    const clipboardPanel = new ClipboardPanel({
        onSave: saveData,
        showToast: showToast,
        onCreateTask: (content) => {
            const newTask = {
                id: generateId(),
                content: content,
                status: 'todo',
                priority: 'medium',
                createdAt: Date.now(),
                history: []
            };
            tasks.push(newTask);
            saveData();
            renderTasks();
        }
    });
    clipboardPanel.setConfirmModal(showConfirmModal);

    // ArchiveService Module
    const archiveService = new ArchiveService({
        onSave: saveData,
        showToast: showToast,
        getTasks: () => tasks,
        setTasks: (newTasks) => { tasks = newTasks; },
        renderTasks: renderTasks,
        getStatusLabel: getStatusLabel,
        getPriorityLabel: getPriorityLabel
    });

    // Initialize
    init();

    async function init() {
        // Initialize sync service first
        await syncService.initialize();
        
        // Setup sync status change listener
        syncService.onStatusChange = (status, error) => {
            updateSyncIndicator(status, error);
        };
        
        // Load app state (with sync on startup)
        await loadAppState();
        
        updateDateTime();
        setInterval(updateDateTime, 1000);
        setInterval(renderTasks, 60000);
        setupEventListeners();
        setupSyncEventListeners();
        
        // Initial sync indicator update
        updateSyncIndicator(syncService.getStatus(), syncService.lastError);
        
        // Setup tab focus sync check
        setupTabFocusSync();
    }

    /**
     * Setup visibility change listener to sync when tab regains focus
     */
    let lastFocusSyncTime = 0;
    const FOCUS_SYNC_COOLDOWN_MS = 30000; // Minimum 30 seconds between focus syncs
    
    function setupTabFocusSync() {
        document.addEventListener('visibilitychange', async () => {
            if (document.visibilityState === 'visible') {
                await checkForRemoteUpdates();
            }
        });
    }
    
    /**
     * Check for remote updates when tab becomes visible
     * Uses cooldown to prevent excessive syncing
     */
    async function checkForRemoteUpdates() {
        // Skip if sync not enabled
        if (!syncService.isEnabled()) {
            return;
        }
        
        // Cooldown check - don't sync too frequently
        const now = Date.now();
        if (now - lastFocusSyncTime < FOCUS_SYNC_COOLDOWN_MS) {
            console.log('Focus sync skipped - cooldown active');
            return;
        }
        lastFocusSyncTime = now;
        
        console.log('Tab focused - checking for remote updates...');
        
        try {
            const remoteData = await syncService.pull();
            
            if (!remoteData) {
                console.log('No remote data or file not found');
                return;
            }
            
            // Compare timestamps
            const localData = {
                tasks: tasks,
                clipboardItems: clipboardItems,
                workTimeSessions: timeTrackerModule.getSessions(),
                timeTracker: timeTrackerModule.getState(),
                archivedTaskLogs: archiveService.getArchivedLogs()
            };
            
            const localTimestamp = localData._syncMetadata?.lastModified || 0;
            const remoteTimestamp = remoteData._syncMetadata?.lastModified || 0;
            
            if (remoteTimestamp > localTimestamp) {
                console.log('Remote data is newer - updating local data');
                
                // Update local state with remote data
                if (remoteData.tasks) tasks = remoteData.tasks;
                if (remoteData.clipboardItems) clipboardItems = remoteData.clipboardItems;
                
                // Update modules
                clipboardPanel.setItems(remoteData.clipboardItems || []);
                timeTrackerModule.setSessions(remoteData.workTimeSessions || []);
                archiveService.setArchivedLogs(remoteData.archivedTaskLogs || []);
                
                // Re-render UI
                renderTasks();
                renderClipboardItems();
                updateStats();
                
                // Save to local storage (without triggering another sync)
                await StorageService.saveData({
                    tasks: tasks,
                    clipboardItems: clipboardItems,
                    workTimeSessions: timeTrackerModule.getSessions(),
                    timeTracker: timeTrackerModule.getState(),
                    archivedTaskLogs: archiveService.getArchivedLogs()
                });
                
                showToast(t('syncDataUpdated') || 'Data updated from cloud', 'success');
            } else {
                console.log('Local data is current');
            }
        } catch (error) {
            console.warn('Focus sync check failed:', error);
            // Silent fail - don't bother user with errors on focus
        }
    }

    async function loadAppState() {
        // Load local data first
        let result = await StorageService.loadData();
        
        // Try sync on startup if enabled
        if (syncService.settings.enabled) {
            try {
                const syncResult = await syncService.syncOnStartup(result);
                if (syncResult.source === 'remote') {
                    // Remote data was newer, use it
                    result = syncResult.data;
                    console.log('Loaded data from remote (newer)');
                }
            } catch (error) {
                console.warn('Sync on startup failed, using local data:', error);
            }
        }

        if (result.tasks) tasks = result.tasks;
        if (result.clipboardItems) clipboardItems = result.clipboardItems;

        // Initialize modules with stored data
        clipboardPanel.setItems(result.clipboardItems || []);
        timeTrackerModule.setSessions(result.workTimeSessions || []);
        archiveService.setArchivedLogs(result.archivedTaskLogs || []);

        // Restore time tracker state if running
        if (result.timeTracker && result.timeTracker.isRunning) {
            timeTrackerModule.setState(result.timeTracker);
            timeTrackerModule.resumeFromStorage();
        }

        // Settings from storage if available
        if (result.settings) {
            if (result.settings.theme) selectedTheme = result.settings.theme;
            if (result.settings.language) selectedLanguage = result.settings.language;
            if (result.settings.palette) selectedPalette = result.settings.palette;
        }

        // Apply loaded state
        renderTasks();
        renderClipboardItems();
        updateStats();

        // Initial settings application
        setLanguage(selectedLanguage);
        applyTheme(selectedTheme);
        applyTranslations();
        applyColorPalette(selectedPalette);
        updateLanguageSelection();
        updateThemeSelection();
        updatePaletteSelection();
    }

    async function saveData() {
        try {
            const data = {
                tasks: tasks,
                clipboardItems: clipboardItems,
                workTimeSessions: timeTrackerModule.getSessions(),
                timeTracker: timeTrackerModule.getState(),
                archivedTaskLogs: archiveService.getArchivedLogs()
            };
            
            await StorageService.saveData(data);
            
            // Queue sync to cloud if enabled
            if (syncService.isEnabled()) {
                syncService.queueSync(data);
            }
        } catch (error) {
            console.error('Failed to save data:', error);
            showToast(t('toastSaveError') || 'Error saving data', 'error');
        }
    }

    function updateDateTime() {
        const now = new Date();
        const locale = selectedLanguage === 'en' ? 'en-GB' : 'de-DE';
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        currentDateEl.textContent = now.toLocaleDateString(locale, options);
        currentTimeEl.textContent = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    }

    function updateStats() {
        const todoTasks = tasks.filter(t => t.status === 'todo').length;
        const progressTasks = tasks.filter(t => t.status === 'in-progress').length;
        const doneTasks = tasks.filter(t => t.status === 'done').length;

        todoCount.textContent = todoTasks;
        progressCount.textContent = progressTasks;
        doneCount.textContent = doneTasks;
        taskStats.textContent = `${doneTasks}/${tasks.length}`;
    }



    function getStatusLabel(status) {
        const labels = {
            'todo': t('todo'),
            'in-progress': t('inProgress'),
            'done': t('done')
        };
        return labels[status] || status;
    }

    function getMinutesInProgress(task) {
        if (task.status !== 'in-progress') return null;

        let inProgressSince = null;

        if (task.history && task.history.length > 0) {
            for (let i = task.history.length - 1; i >= 0; i--) {
                if (task.history[i].status === 'in-progress') {
                    inProgressSince = task.history[i].timestamp;
                    break;
                }
            }
        }

        if (!inProgressSince) return null;

        const now = Date.now();
        const diffMs = now - inProgressSince;
        const diffMinutes = Math.floor(diffMs / 60000);

        return diffMinutes;
    }

    function formatDuration(minutes) {
        if (minutes < 60) {
            return `${minutes} ${t('min')}`;
        } else if (minutes < 1440) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return mins > 0 ? `${hours} ${t('hours')} ${mins} ${t('min')}` : `${hours} ${t('hours')}`;
        } else {
            const days = Math.floor(minutes / 1440);
            const hours = Math.floor((minutes % 1440) / 60);
            return hours > 0 ? `${days} ${t('days')} ${hours} ${t('hours')}` : `${days} ${t('days')}`;
        }
    }

    // ============ TASK FUNCTIONS ============

    // Set up event delegation for task containers (once)
    function setupTaskDelegation() {
        const taskContainers = [todoList, inProgressList, doneList];
        
        taskContainers.forEach(container => {
            container.addEventListener('click', (e) => {
                const taskCard = e.target.closest('.task-card');
                if (!taskCard) return;

                const taskId = taskCard.dataset.id;
                const task = tasks.find(t => t.id === taskId);
                if (!task) return;

                // Copy button
                if (e.target.closest('.copy-btn')) {
                    e.stopPropagation();
                    copyToClipboard(task.content);
                    showToast(t('toastCopied'), 'success');
                    return;
                }

                // Delete button
                if (e.target.closest('.delete-btn')) {
                    e.stopPropagation();
                    tasks = tasks.filter(t => t.id !== task.id);
                    saveData();
                    renderTasks();
                    showToast(t('toastTaskDeleted'), 'info');
                    return;
                }

                // Info button
                if (e.target.closest('.info-btn')) {
                    e.stopPropagation();
                    openInfoModal(task);
                    return;
                }

                // Pin button
                if (e.target.closest('.pin-btn')) {
                    e.stopPropagation();
                    task.pinned = !task.pinned;
                    saveData();
                    renderTasks();
                    showToast(task.pinned ? t('toastPinned') : t('toastUnpinned'), 'success');
                    return;
                }

                // Click on card itself (not on a button) - open edit modal
                if (!e.target.closest('.task-action-btn')) {
                    openEditModal(task);
                }
            });
        });
    }

    function renderTasks() {
        [todoList, inProgressList, doneList].forEach(list => list.innerHTML = '');

        // Sort by: pinned first, then priority (high > medium > low)
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        const sortedTasks = [...tasks].sort((a, b) => {
            // Pinned tasks come first
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            // Then sort by priority
            const priorityA = priorityOrder[a.priority] ?? 1;
            const priorityB = priorityOrder[b.priority] ?? 1;
            return priorityA - priorityB;
        });

        sortedTasks.forEach(task => {
            const card = createTaskElement(task);
            if (task.status === 'todo') todoList.appendChild(card);
            else if (task.status === 'in-progress') inProgressList.appendChild(card);
            else if (task.status === 'done') doneList.appendChild(card);
        });

        // Add empty states
        [todoList, inProgressList, doneList].forEach(list => {
            if (list.children.length === 0) {
                const emptyState = document.createElement('div');
                emptyState.className = 'empty-state';
                emptyState.innerHTML = `
                    <div class="empty-state-icon">${icons.file}</div>
                    <div class="empty-state-text">${t('noTasks')}</div>
                `;
                list.appendChild(emptyState);
            }
        });

        updateStats();
    }

    function createTaskElement(task) {
        const div = document.createElement('div');
        div.classList.add('task-card');
        if (task.pinned) div.classList.add('pinned');
        div.draggable = true;
        div.dataset.id = task.id;

        const createdAt = task.createdAt || parseInt(task.id);

        // In-Progress Timer (compact)
        const minutesInProgress = getMinutesInProgress(task);
        let timerHtml = '';
        if (minutesInProgress !== null) {
            timerHtml = `<span class="task-timer-inline">${icons.timer} ${formatDuration(minutesInProgress)}</span>`;
        }

        // Additional Info
        let additionalInfoHtml = '';
        if (task.additionalInfo && task.additionalInfo.trim()) {
            additionalInfoHtml = `<div class="task-additional-info">${icons.info} ${escapeHtml(task.additionalInfo)}</div>`;
        }

        div.innerHTML = `
            <div class="task-content">${escapeHtml(task.content)}</div>
            ${additionalInfoHtml}
            <div class="task-footer">
                <div class="task-timestamps-inline">
                    <span class="task-created">${icons.calendar} ${formatDateTime(createdAt)}</span>
                    ${timerHtml}
                </div>
                <div class="task-meta">
                    <div class="task-actions">
                        <button class="task-action-btn pin-btn ${task.pinned ? 'pinned' : ''}" title="${task.pinned ? t('tooltipUnpin') : t('tooltipPin')}" aria-label="${task.pinned ? t('tooltipUnpin') : t('tooltipPin')}">${icons.pin}</button>
                        <button class="task-action-btn copy-btn" title="${t('tooltipCopy')}" aria-label="${t('tooltipCopy')}">${icons.copy}</button>
                        <button class="task-action-btn info-btn" title="${t('tooltipInfo')}" aria-label="${t('tooltipInfo')}">${icons.info}</button>
                        <button class="task-action-btn delete-btn" title="${t('tooltipDelete')}" aria-label="${t('tooltipDelete')}">${icons.trash}</button>
                    </div>
                    <span class="task-priority priority-${task.priority || 'medium'}">${getPriorityLabel(task.priority)}</span>
                </div>
            </div>
        `;

        // Drag events (must stay on element for dataTransfer)
        div.addEventListener('dragstart', (e) => {
            currentDragItem = task;
            div.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });

        div.addEventListener('dragend', () => {
            currentDragItem = null;
            div.classList.remove('dragging');
            document.querySelectorAll('.column').forEach(col => col.classList.remove('drag-over'));
        });

        return div;
    }

    function getPriorityLabel(priority) {
        const labels = {
            low: t('low'),
            medium: t('medium'),
            high: t('high')
        };
        return labels[priority] || labels.medium;
    }

    // ============ CLIPBOARD FUNCTIONS ============

    // Set up event delegation for clipboard container (once)
    function setupClipboardDelegation() {
        clipboardItemsContainer.addEventListener('click', (e) => {
            const itemEl = e.target.closest('.clipboard-item');
            if (!itemEl) return;

            const itemId = itemEl.dataset.id;
            const item = clipboardItems.find(i => i.id === itemId);
            if (!item) return;

            // Copy button
            if (e.target.closest('.copy')) {
                if (item.type === 'image') {
                    copyImageToClipboard(item.content);
                } else {
                    copyToClipboard(item.content);
                }
                showToast(t('toastCopied'), 'success');
                return;
            }

            // Task button
            if (e.target.closest('.task')) {
                const newTask = {
                    id: generateId(),
                    content: item.content,
                    status: 'todo',
                    priority: 'medium',
                    createdAt: Date.now(),
                    history: []
                };
                tasks.push(newTask);
                saveData();
                renderTasks();
                showToast(t('toastAddedAsTask'), 'success');
                return;
            }

            // Delete button
            if (e.target.closest('.delete')) {
                const index = clipboardItems.findIndex(i => i.id === itemId);
                if (index !== -1) {
                    clipboardItems.splice(index, 1);
                    saveData();
                    renderClipboardItems();
                    showToast(t('toastDeleted'), 'info');
                }
                return;
            }

            // Click on item itself (not on a button) - copy
            if (!e.target.closest('.clipboard-item-btn')) {
                if (item.type === 'image') {
                    copyImageToClipboard(item.content);
                } else {
                    copyToClipboard(item.content);
                }
                showToast(t('toastCopied'), 'success');
            }
        });
    }

    function renderClipboardItems() {
        clipboardItemsContainer.innerHTML = '';

        if (clipboardItems.length === 0) {
            clipboardItemsContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">${icons.clip}</div>
                    <div class="empty-state-text">${t('clipboardEmpty')}<br><small>${t('clipboardPasteHint')}</small></div>
                </div>
            `;
            return;
        }

        clipboardItems.forEach((item) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'clipboard-item';
            itemEl.dataset.id = item.id;

            let contentHtml = '';
            if (item.type === 'image') {
                if (item.content && item.content.startsWith('data:image/')) {
                    contentHtml = `<img src="${item.content}" class="clipboard-image" alt="${t('image')}"/>`;
                } else {
                    contentHtml = `<div class="clipboard-item-content">${t('invalidImage') || 'Invalid image'}</div>`;
                }
            } else {
                contentHtml = `<div class="clipboard-item-content">${escapeHtml(item.content)}</div>`;
            }

            itemEl.innerHTML = `
                ${contentHtml}
                <div class="clipboard-item-meta">${icons.calendar} ${formatDateTime(item.createdAt || Date.now())}</div>
                <div class="clipboard-item-actions">
                    <button class="clipboard-item-btn copy">${icons.copy} ${t('copy')}</button>
                    ${item.type !== 'image' ? `<button class="clipboard-item-btn task">${icons.filePlus} ${t('task')}</button>` : ''}
                    <button class="clipboard-item-btn delete">${icons.trash}</button>
                </div>
            `;

            clipboardItemsContainer.appendChild(itemEl);
        });
    }

    function addClipboardItem(content, type = 'text') {
        if (!content || (type === 'text' && !content.trim())) return;

        const newItem = {
            id: generateId(),
            content: type === 'text' ? content.trim() : content,
            type: type,
            createdAt: Date.now()
        };

        clipboardItems.unshift(newItem);
        if (clipboardItems.length > MAX_CLIPBOARD_ITEMS) {
            clipboardItems.pop();
        }
        saveData();
        renderClipboardItems();
    }

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
            showToast(t('toastCopyFailed') || 'Copy failed - please copy manually', 'error');
        }
    }

    async function copyImageToClipboard(dataUrl) {
        try {
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            await navigator.clipboard.write([
                new ClipboardItem({ [blob.type]: blob })
            ]);
        } catch (err) {
            window.open(dataUrl, '_blank');
            showToast(t('toastImageOpenedNewTab'), 'info');
        }
    }

    function handleImageUpload(file) {
        if (!file || !file.type.startsWith('image/')) {
            showToast(t('toastSelectImage'), 'error');
            return;
        }

        if (file.size > MAX_IMAGE_SIZE_BYTES) {
            showToast(t('toastImageTooLarge'), 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            addClipboardItem(e.target.result, 'image');
            showToast(t('toastImageSaved'), 'success');
        };
        reader.readAsDataURL(file);
    }

    function handleImageFromBlob(blob) {
        if (blob.size > MAX_IMAGE_SIZE_BYTES) {
            showToast(t('toastImageTooLarge'), 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            addClipboardItem(e.target.result, 'image');
            showToast(t('toastPastedImageSaved'), 'success');
        };
        reader.readAsDataURL(blob);
    }

    // ============ MODAL FUNCTIONS ============

    function openAddModal() {
        editingTaskId = null;
        taskInput.value = '';
        modalTitle.textContent = t('newTask');
        deleteTaskBtn.classList.add('hidden');
        taskHistorySection.classList.add('hidden');
        selectedPriority = 'medium';
        updatePrioritySelection();
        showModal();
        // Delay focus to after modal animation
        setTimeout(() => {
            taskInput.focus();
        }, 100);
    }

    function openEditModal(task) {
        editingTaskId = task.id;
        taskInput.value = task.content;
        modalTitle.textContent = t('editTask');
        deleteTaskBtn.classList.remove('hidden');
        selectedPriority = task.priority || 'medium';
        updatePrioritySelection();

        // Show history in modal
        if (task.history && task.history.length > 0) {
            taskHistorySection.classList.remove('hidden');
            let historyHtml = '';
            task.history.forEach(entry => {
                historyHtml += `
                    <div class="history-entry-modal">
                        ${icons.arrow}
                        <span class="history-status">${getStatusLabel(entry.status)}</span>
                        <span>-</span>
                        <span>${formatDate(entry.timestamp)}</span>
                    </div>
                `;
            });
            taskHistoryList.innerHTML = historyHtml;
        } else {
            taskHistorySection.classList.add('hidden');
            taskHistoryList.innerHTML = '';
        }

        showModal();
        taskInput.focus();
    }

    function showModal() {
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.add('visible');
        });
    }

    function closeModal() {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, MODAL_ANIMATION_MS);
    }

    // Info Modal Functions
    function openInfoModal(task) {
        editingInfoTaskId = task.id;
        infoInput.value = task.additionalInfo || '';
        infoModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            infoModal.classList.add('visible');
        });
        setTimeout(() => {
            infoInput.focus();
        }, 100);
    }

    function closeInfoModal() {
        infoModal.classList.remove('visible');
        setTimeout(() => {
            infoModal.classList.add('hidden');
        }, MODAL_ANIMATION_MS);
        editingInfoTaskId = null;
    }

    function saveInfo() {
        if (!editingInfoTaskId) return;
        const task = tasks.find(t => t.id === editingInfoTaskId);
        if (task) {
            task.additionalInfo = infoInput.value.trim();
            saveData();
            renderTasks();
            showToast(task.additionalInfo ? t('toastInfoSaved') : t('toastInfoRemoved'), 'success');
        }
        closeInfoModal();
    }

    function clearInfo() {
        if (!editingInfoTaskId) return;
        const task = tasks.find(t => t.id === editingInfoTaskId);
        if (task) {
            task.additionalInfo = '';
            saveData();
            renderTasks();
            showToast(t('toastInfoDeleted'), 'info');
        }
        closeInfoModal();
    }

    function updatePrioritySelection() {
        priorityOptions.forEach(opt => {
            opt.classList.remove('selected');
            if (opt.dataset.priority === selectedPriority) {
                opt.classList.add('selected');
            }
        });
    }

    // Confirm Modal Functions
    function showConfirmModal(title, message, okText, cancelText) {
        return new Promise((resolve) => {
            confirmResolve = resolve;
            document.getElementById('confirm-modal-title').innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                ${title}
            `;
            document.getElementById('confirm-modal-message').textContent = message;

            const okBtn = document.getElementById('confirm-ok-btn');
            const cancelBtn = document.getElementById('confirm-cancel-btn');

            okBtn.textContent = okText || t('delete');
            cancelBtn.textContent = cancelText || t('cancel');

            const modal = document.getElementById('confirm-modal');
            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                modal.classList.add('visible');
            });
        });
    }

    function closeConfirmModal() {
        const modal = document.getElementById('confirm-modal');
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, MODAL_ANIMATION_MS);
        if (confirmResolve) {
            confirmResolve(false); // Resolve false if closed without choice
            confirmResolve = null;
        }
    }

    // ============ SETTINGS FUNCTIONS ============

    function saveSettingsData() {
        const settings = {
            theme: selectedTheme,
            language: selectedLanguage,
            palette: selectedPalette
        };
        StorageService.saveSettings(settings);
    }

    function openSettingsModal() {
        updatePaletteSelection();
        updateLanguageSelection();
        updateThemeSelection();
        updateSyncSettingsUI();
        settingsModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            settingsModal.classList.add('visible');
        });
    }

    function closeSettingsModal() {
        settingsModal.classList.remove('visible');
        setTimeout(() => {
            settingsModal.classList.add('hidden');
        }, MODAL_ANIMATION_MS);
    }

    function updatePaletteSelection() {
        paletteOptions.forEach(opt => {
            opt.classList.remove('selected');
            if (opt.dataset.palette === selectedPalette) {
                opt.classList.add('selected');
            }
        });
    }

    function updateLanguageSelection() {
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(opt => {
            opt.classList.remove('selected');
            if (opt.dataset.lang === selectedLanguage) {
                opt.classList.add('selected');
            }
        });
    }

    function updateThemeSelection() {
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(opt => {
            opt.classList.remove('selected');
            if (opt.dataset.theme === selectedTheme) {
                opt.classList.add('selected');
            }
        });
    }

    // ============ SYNC FUNCTIONS ============

    /**
     * Update the sync indicator in the header based on current status
     */
    function updateSyncIndicator(status, error) {
        const indicator = document.getElementById('sync-indicator');
        const iconIdle = document.getElementById('sync-icon-idle');
        const iconSyncing = document.getElementById('sync-icon-syncing');
        const iconError = document.getElementById('sync-icon-error');
        const iconOffline = document.getElementById('sync-icon-offline');
        
        if (!indicator) return;
        
        // Hide all icons first
        [iconIdle, iconSyncing, iconError, iconOffline].forEach(icon => {
            if (icon) icon.classList.add('hidden');
        });
        
        // Remove all status classes
        indicator.classList.remove('sync-idle', 'sync-syncing', 'sync-error', 'sync-offline');
        
        if (status === SyncStatus.DISABLED) {
            indicator.classList.add('hidden');
            return;
        }
        
        indicator.classList.remove('hidden');
        
        switch (status) {
            case SyncStatus.IDLE:
                iconIdle?.classList.remove('hidden');
                indicator.classList.add('sync-idle');
                indicator.title = t('syncStatusConnected') || 'Sync: Connected';
                break;
            case SyncStatus.SYNCING:
                iconSyncing?.classList.remove('hidden');
                indicator.classList.add('sync-syncing');
                indicator.title = t('syncStatusSyncing') || 'Syncing...';
                break;
            case SyncStatus.ERROR:
                iconError?.classList.remove('hidden');
                indicator.classList.add('sync-error');
                indicator.title = (t('syncStatusError') || 'Sync Error') + (error ? `: ${error}` : '');
                break;
            case SyncStatus.OFFLINE:
                iconOffline?.classList.remove('hidden');
                indicator.classList.add('sync-offline');
                indicator.title = t('syncStatusOffline') || 'Sync: Offline';
                break;
        }
    }

    /**
     * Update the sync settings UI in the settings modal
     */
    function updateSyncSettingsUI() {
        const enabledToggle = document.getElementById('sync-enabled-toggle');
        const webdavConfig = document.getElementById('webdav-config');
        const serverInput = document.getElementById('webdav-server');
        const usernameInput = document.getElementById('webdav-username');
        const passwordInput = document.getElementById('webdav-password');
        const filepathInput = document.getElementById('webdav-filepath');
        const lastSyncInfo = document.getElementById('sync-last-info');
        const lastSyncTime = document.getElementById('sync-last-time');
        
        if (!enabledToggle) return;
        
        const settings = syncService.getSettings();
        
        enabledToggle.checked = settings.enabled;
        
        if (settings.enabled) {
            webdavConfig?.classList.remove('hidden');
        } else {
            webdavConfig?.classList.add('hidden');
        }
        
        // Populate WebDAV fields
        if (serverInput) serverInput.value = settings.webdav.serverUrl || '';
        if (usernameInput) usernameInput.value = settings.webdav.username || '';
        if (passwordInput) {
            // Don't show actual password, just indicate if one is saved
            passwordInput.value = '';
            passwordInput.placeholder = settings.webdav.hasPassword ? '••••••••' : '';
        }
        if (filepathInput) filepathInput.value = settings.webdav.filePath || 'DashboardSync/dashboard-data.json';
        
        // Show last sync time if available
        if (settings.lastSyncTime && lastSyncInfo && lastSyncTime) {
            lastSyncInfo.classList.remove('hidden');
            lastSyncTime.textContent = syncService.getLastSyncTimeFormatted(selectedLanguage);
        } else if (lastSyncInfo) {
            lastSyncInfo.classList.add('hidden');
        }
    }

    /**
     * Save sync settings from the modal
     */
    async function saveSyncSettings() {
        const enabledToggle = document.getElementById('sync-enabled-toggle');
        const serverInput = document.getElementById('webdav-server');
        const usernameInput = document.getElementById('webdav-username');
        const passwordInput = document.getElementById('webdav-password');
        const filepathInput = document.getElementById('webdav-filepath');
        
        const enabled = enabledToggle?.checked || false;
        const serverUrl = serverInput?.value.trim() || '';
        const username = usernameInput?.value.trim() || '';
        const password = passwordInput?.value || '';
        const filePath = filepathInput?.value.trim() || 'DashboardSync/dashboard-data.json';
        
        if (enabled) {
            // Validate required fields
            if (!serverUrl || !username) {
                showToast(t('syncErrorMissingFields') || 'Please fill in server URL and username', 'error');
                return false;
            }
            
            // Configure WebDAV (password will be encrypted)
            // Only update password if a new one was entered
            const currentSettings = syncService.getSettings();
            if (password || !currentSettings.webdav.hasPassword) {
                await syncService.configureWebDAV({
                    serverUrl,
                    username,
                    password,
                    filePath
                });
            } else {
                // Update other fields without changing password
                syncService.settings.webdav.serverUrl = serverUrl;
                syncService.settings.webdav.username = username;
                syncService.settings.webdav.filePath = filePath;
                await syncService.saveSettings();
            }
            
            await syncService.enable();
        } else {
            await syncService.disable();
        }
        
        updateSyncIndicator(syncService.getStatus(), syncService.lastError);
        return true;
    }

    /**
     * Test WebDAV connection with current form values
     */
    async function testSyncConnection() {
        const serverInput = document.getElementById('webdav-server');
        const usernameInput = document.getElementById('webdav-username');
        const passwordInput = document.getElementById('webdav-password');
        const filepathInput = document.getElementById('webdav-filepath');
        const testMessage = document.getElementById('sync-test-message');
        const testBtn = document.getElementById('webdav-test-btn');
        
        const serverUrl = serverInput?.value.trim() || '';
        const username = usernameInput?.value.trim() || '';
        const password = passwordInput?.value || '';
        const filePath = filepathInput?.value.trim() || 'DashboardSync/dashboard-data.json';
        
        if (!serverUrl || !username) {
            showTestMessage(t('syncErrorMissingFields') || 'Please fill in server URL and username', false);
            return;
        }
        
        // If no password entered, try to use existing encrypted password
        let testPassword = password;
        if (!testPassword) {
            const currentSettings = syncService.getSettings();
            if (currentSettings.webdav.hasPassword) {
                // Use existing password from settings
                testPassword = await syncService.settings.webdav.encryptedPassword ? 
                    await (await import('./modules/services/sync/crypto.js')).decryptPassword(syncService.settings.webdav.encryptedPassword) : '';
            }
        }
        
        if (!testPassword) {
            showTestMessage(t('syncErrorNoPassword') || 'Please enter a password', false);
            return;
        }
        
        // Check if we have permission, request if needed
        const hasPermission = await syncService.hasHostPermission(serverUrl);
        if (!hasPermission) {
            // Request permission - this must happen in the click handler
            const granted = await syncService.requestHostPermission(serverUrl);
            if (!granted) {
                showTestMessage(t('syncPermissionDenied') || 'Permission denied. Please allow access to the server.', false);
                return;
            }
        }
        
        // Disable button during test
        if (testBtn) {
            testBtn.disabled = true;
            testBtn.innerHTML = `<span class="sync-testing-spinner"></span> ${t('syncTesting') || 'Testing...'}`;
        }
        
        try {
            const result = await syncService.testConnection({
                serverUrl,
                username,
                password: testPassword,
                filePath
            });
            
            if (result.success) {
                showTestMessage(t('syncTestSuccess') || 'Connection successful!', true);
            } else if (result.permissionRequired) {
                // This shouldn't happen now, but handle it just in case
                showTestMessage(t('syncPermissionRequired') || 'Permission required. Please click the button again.', false);
            } else {
                showTestMessage((t('syncTestFailed') || 'Connection failed') + ': ' + result.error, false);
            }
        } catch (error) {
            showTestMessage((t('syncTestFailed') || 'Connection failed') + ': ' + error.message, false);
        } finally {
            // Re-enable button
            if (testBtn) {
                testBtn.disabled = false;
                testBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span data-i18n="syncTestConnection">${t('syncTestConnection') || 'Verbindung testen'}</span>
                `;
            }
        }
    }

    /**
     * Show test connection result message
     */
    function showTestMessage(message, success) {
        const testMessage = document.getElementById('sync-test-message');
        if (!testMessage) return;
        
        testMessage.textContent = message;
        testMessage.classList.remove('hidden', 'success', 'error');
        testMessage.classList.add(success ? 'success' : 'error');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            testMessage.classList.add('hidden');
        }, 5000);
    }

    /**
     * Setup event listeners for sync UI elements
     */
    function setupSyncEventListeners() {
        const enabledToggle = document.getElementById('sync-enabled-toggle');
        const webdavConfig = document.getElementById('webdav-config');
        const testBtn = document.getElementById('webdav-test-btn');
        const syncIndicator = document.getElementById('sync-indicator');
        
        // Toggle sync config visibility
        enabledToggle?.addEventListener('change', () => {
            if (enabledToggle.checked) {
                webdavConfig?.classList.remove('hidden');
            } else {
                webdavConfig?.classList.add('hidden');
            }
        });
        
        // Test connection button
        testBtn?.addEventListener('click', testSyncConnection);
        
        // Click on sync indicator to force sync
        syncIndicator?.addEventListener('click', async () => {
            if (syncService.isEnabled() && !syncService.isSyncing) {
                const data = {
                    tasks: tasks,
                    clipboardItems: clipboardItems,
                    workTimeSessions: timeTrackerModule.getSessions(),
                    timeTracker: timeTrackerModule.getState(),
                    archivedTaskLogs: archiveService.getArchivedLogs()
                };
                const success = await syncService.syncNow(data);
                if (success) {
                    showToast(t('syncComplete') || 'Sync complete', 'success');
                }
            }
        });
    }

    // ============ END SYNC FUNCTIONS ============

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }

    function applyTranslations() {
        // Update HTML lang attribute for accessibility
        document.documentElement.lang = selectedLanguage;

        // Update document title
        document.title = t('dashboardTitle');

        // Header
        document.querySelector('h1').textContent = t('dashboardTitle');

        // Tasks label in header
        const tasksLabel = document.getElementById('tasks-label');
        if (tasksLabel) tasksLabel.textContent = t('tasks');

        // Column headers
        document.querySelector('#todo .column-title h2').textContent = t('todo');
        document.querySelector('#in-progress .column-title h2').textContent = t('inProgress');
        document.querySelector('#done .column-title h2').textContent = t('done');

        // Tooltips and aria-labels for icon-only buttons
        const addTaskBtn = document.getElementById('add-task-btn');
        addTaskBtn.title = t('tooltipNewTask');
        addTaskBtn.setAttribute('aria-label', t('tooltipNewTask'));

        const exportDoneBtn = document.getElementById('export-done-btn');
        exportDoneBtn.title = t('tooltipExport');
        exportDoneBtn.setAttribute('aria-label', t('tooltipExport'));

        const archiveDoneBtn = document.getElementById('archive-done-btn');
        archiveDoneBtn.title = t('tooltipArchive');
        archiveDoneBtn.setAttribute('aria-label', t('tooltipArchive'));

        const settingsBtn = document.getElementById('settings-btn');
        settingsBtn.title = t('tooltipSettings');
        settingsBtn.setAttribute('aria-label', t('tooltipSettings'));

        const clearClipboardBtn = document.getElementById('clear-clipboard-btn');
        clearClipboardBtn.title = t('tooltipClearClipboard');
        clearClipboardBtn.setAttribute('aria-label', t('tooltipClearClipboard'));

        // Update aria-labels for close buttons
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.setAttribute('aria-label', t('close') || 'Schließen');
        });

        document.querySelector('#archive-logs-modal h2').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="5" rx="2"></rect>
                <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"></path>
                <path d="M10 13h4"></path>
            </svg>
            ${t('archiveLogs')}
        `;
        document.getElementById('archive-search-input').placeholder = t('searchPlaceholder');

        // Archive filter labels and buttons
        const priorityLabel = document.querySelector('#archive-priority-filter').closest('.archive-filter-group').querySelector('.archive-filter-label');
        if (priorityLabel) priorityLabel.textContent = t('filterPriority');
        const timeLabel = document.querySelector('#archive-time-filter').closest('.archive-filter-group').querySelector('.archive-filter-label');
        if (timeLabel) timeLabel.textContent = t('filterTime');

        // Priority filter buttons
        const priorityBtns = document.querySelectorAll('#archive-priority-filter .archive-filter-btn');
        priorityBtns.forEach(btn => {
            const priority = btn.dataset.priority;
            if (priority === 'all') btn.textContent = t('filterAll');
            else if (priority === 'high') btn.textContent = t('filterHigh');
            else if (priority === 'medium') btn.textContent = t('filterMedium');
            else if (priority === 'low') btn.textContent = t('filterLow');
        });

        // Time filter buttons
        const timeBtns = document.querySelectorAll('#archive-time-filter .archive-filter-btn');
        timeBtns.forEach(btn => {
            const time = btn.dataset.time;
            if (time === 'all') btn.textContent = t('filterAll');
            else if (time === 'today') btn.textContent = t('filterToday');
            else if (time === 'week') btn.textContent = t('filterWeek');
            else if (time === 'month') btn.textContent = t('filterMonth');
        });

        // Worktime modal
        document.querySelector('#worktime-modal h2').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${t('worktimeLog')}
        `;
        document.getElementById('clear-worktime-btn').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            ${t('deleteAll')}
        `;

        // Clipboard panel
        document.querySelector('.clipboard-header h3').textContent = t('clipboard');
        document.querySelector('.clipboard-input').placeholder = t('clipboardPlaceholder');

        // Clipboard buttons
        const clipboardBtns = document.querySelectorAll('.clipboard-buttons .clipboard-btn');
        if (clipboardBtns[0]) {
            clipboardBtns[0].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="17" x2="12" y2="3"></line>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                </svg>
                ${t('saveText')}
            `;
        }
        if (clipboardBtns[1]) {
            clipboardBtns[1].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                ${t('image')}
            `;
        }

        // Time tracker buttons
        const trackerStartBtn = document.getElementById('tracker-start-btn');
        const trackerLogBtn = document.getElementById('tracker-log-btn');
        if (trackerStartBtn && !timeTrackerModule.getState().isRunning) {
            trackerStartBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                ${t('start')}
            `;
        }
        if (trackerLogBtn) {
            trackerLogBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                ${t('log')}
            `;
        }

        // Settings modal
        document.querySelector('#settings-modal h2').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            ${t('settings')}
        `;

        // Settings form labels
        const settingsLabels = document.querySelectorAll('#settings-modal .form-label');
        if (settingsLabels[0]) settingsLabels[0].textContent = t('language');
        if (settingsLabels[1]) settingsLabels[1].textContent = t('colorPalette');

        // Settings buttons
        document.getElementById('cancel-settings-btn').textContent = t('cancel');
        document.getElementById('save-settings-btn').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            ${t('save')}
        `;

        // Re-render dynamic content
        renderTasks();
        renderClipboardItems();
    }

    function applyColorPalette(paletteName) {
        const palette = colorPalettes[paletteName];
        if (!palette) return;

        const root = document.documentElement;

        // Update CSS custom properties
        root.style.setProperty('--accent-gradient', palette.accentGradient);
        root.style.setProperty('--accent-1', palette.accent1);
        root.style.setProperty('--accent-2', palette.accent2);
        root.style.setProperty('--accent-3', palette.accent3);
        root.style.setProperty('--accent-soft', palette.accentSoft);

        root.style.setProperty('--todo-color', palette.todoColor);
        root.style.setProperty('--progress-color', palette.progressColor);
        root.style.setProperty('--done-color', palette.doneColor);
        root.style.setProperty('--clipboard-color', palette.clipboardColor);

        root.style.setProperty('--shadow-glow', palette.shadowGlow);

        // Update logo filter
        root.style.setProperty('--logo-filter', palette.logoFilter);
    }

    // ============ TOAST FUNCTIONS ============

    function showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const iconMap = {
            success: icons.check,
            error: icons.x,
            info: icons.info
        };

        toast.querySelector('.toast-icon').innerHTML = iconMap[type] || iconMap.info;
        toast.querySelector('.toast-message').textContent = message;
        toast.className = `toast ${type}`;

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');
        }, TOAST_DURATION_MS);
    }

    // ============ CLEAR CLIPBOARD FUNCTION ============

    async function clearAllClipboard() {
        if (clipboardItems.length === 0) return;

        const confirmed = await showConfirmModal(
            t('deleteAll'),
            t('confirmClearClipboard'),
            t('deleteAll'),
            t('cancel')
        );

        if (confirmed) {
            clipboardItems = [];
            saveData();
            renderClipboardItems();
            showToast(t('toastClipboardCleared'), 'info');
        }
    }

    // ============ EXPORT FUNCTIONS ============


    function exportDoneTasks() {
        const doneTasks = tasks.filter(t => t.status === 'done');

        if (doneTasks.length === 0) {
            showToast(t('toastNoDoneTasks'), 'info');
            return;
        }

        let markdown = `# ${t('completedTasks')}\n\n`;

        doneTasks.forEach(task => {
            // Find when it was moved to done
            let doneTimestamp = null;
            let inProgressDuration = null;

            if (task.history && task.history.length > 0) {
                // Find the done entry
                for (let i = task.history.length - 1; i >= 0; i--) {
                    if (task.history[i].status === 'done') {
                        doneTimestamp = task.history[i].timestamp;
                        break;
                    }
                }

                // Calculate time in progress
                let inProgressStart = null;
                let inProgressEnd = null;
                for (let i = 0; i < task.history.length; i++) {
                    if (task.history[i].status === 'in-progress' && !inProgressStart) {
                        inProgressStart = task.history[i].timestamp;
                    }
                    if (task.history[i].status === 'done' && inProgressStart) {
                        inProgressEnd = task.history[i].timestamp;
                        break;
                    }
                }

                if (inProgressStart && inProgressEnd) {
                    inProgressDuration = Math.floor((inProgressEnd - inProgressStart) / 60000);
                }
            }

            const locale = selectedLanguage === 'en' ? 'en-GB' : 'de-DE';
            const doneDate = doneTimestamp
                ? new Date(doneTimestamp).toLocaleString(locale, {
                    day: '2-digit', month: '2-digit', year: '2-digit',
                    hour: '2-digit', minute: '2-digit'
                })
                : t('unknown');

            const durationStr = inProgressDuration !== null
                ? formatDuration(inProgressDuration)
                : '-';

            markdown += `- ${task.content}, ${t('processingTime')}: ${durationStr} - ${t('completedAt')}: ${doneDate}\n`;
        });

        copyToClipboard(markdown);
        showToast(`${doneTasks.length} ${t('toastExported')}`, 'success');
    }

    // ============ EVENT LISTENERS ============

    function setupEventListeners() {
        // Set up event delegation for dynamic content
        setupClipboardDelegation();
        setupTaskDelegation();

        // Add task button
        addTaskBtn.addEventListener('click', openAddModal);

        // Export done tasks button
        const exportDoneBtn = document.getElementById('export-done-btn');
        exportDoneBtn.addEventListener('click', exportDoneTasks);

        // Archive done tasks button - use module
        const archiveDoneBtn = document.getElementById('archive-done-btn');
        archiveDoneBtn.addEventListener('click', () => archiveService.archiveDoneTasks());

        // Clear clipboard button - handled by ClipboardPanel module

        // Archive logs modal - events now handled by ArchiveService module

        // Double-click on archive button opens logs (single click archives)
        archiveDoneBtn.addEventListener('dblclick', (e) => {
            e.preventDefault();
            e.stopPropagation();
            archiveService.openModal();
        });

        // Right-click on archive button opens logs
        archiveDoneBtn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            archiveService.openModal();
        });

        // Column drag-and-drop events
        const columns = document.querySelectorAll('.column');
        columns.forEach(column => {
            let dragCounter = 0;

            column.addEventListener('dragenter', (e) => {
                e.preventDefault();
                dragCounter++;
                if (dragCounter === 1) {
                    column.classList.add('drag-over');
                }
            });

            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });

            column.addEventListener('dragleave', (e) => {
                dragCounter--;
                if (dragCounter === 0) {
                    column.classList.remove('drag-over');
                }
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                dragCounter = 0;
                column.classList.remove('drag-over');

                if (!currentDragItem) return;

                const newStatus = column.dataset.status;
                if (currentDragItem.status !== newStatus) {
                    // Add to history
                    if (!currentDragItem.history) currentDragItem.history = [];
                    currentDragItem.history.push({
                        status: newStatus,
                        timestamp: Date.now()
                    });

                    currentDragItem.status = newStatus;
                    saveData();
                    renderTasks();
                    showToast(`${t('toastMovedTo')} ${getStatusLabel(newStatus)}`, 'success');
                }
            });
        });

        // Modal close
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Confirm Modal
        const confirmModal = document.getElementById('confirm-modal');
        const confirmOkBtn = document.getElementById('confirm-ok-btn');
        const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
        const confirmCloseBtnElem = document.querySelector('.confirm-close-btn');

        confirmOkBtn.addEventListener('click', () => {
            if (confirmResolve) confirmResolve(true);
            closeConfirmModal();
        });

        confirmCancelBtn.addEventListener('click', () => {
            if (confirmResolve) confirmResolve(false);
            closeConfirmModal();
        });

        confirmCloseBtnElem.addEventListener('click', () => {
            if (confirmResolve) confirmResolve(false);
            closeConfirmModal();
        });

        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) {
                if (confirmResolve) confirmResolve(false);
                closeConfirmModal();
            }
        });

        // Info Modal
        infoCloseBtn.addEventListener('click', closeInfoModal);
        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) closeInfoModal();
        });
        saveInfoBtn.addEventListener('click', saveInfo);
        clearInfoBtn.addEventListener('click', clearInfo);
        infoInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.shiftKey) {
                e.preventDefault();
                saveInfo();
            }
        });

        // Priority selection
        priorityOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                selectedPriority = opt.dataset.priority;
                updatePrioritySelection();
            });
        });

        // Theme selection
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                selectedTheme = opt.dataset.theme;
                applyTheme(selectedTheme);
                updateThemeSelection();
            });
        });

        // Save task
        saveTaskBtn.addEventListener('click', () => {
            const content = taskInput.value.trim();
            if (!content) {
                showToast(t('toastEnterDescription'), 'error');
                return;
            }

            if (editingTaskId) {
                const task = tasks.find(t => t.id === editingTaskId);
                if (task) {
                    task.content = content;
                    task.priority = selectedPriority;
                }
                showToast(t('toastTaskUpdated'), 'success');
            } else {
                const newTask = {
                    id: generateId(),
                    content: content,
                    status: 'todo',
                    priority: selectedPriority,
                    createdAt: Date.now(),
                    history: []
                };
                tasks.push(newTask);
                showToast(t('toastTaskAdded'), 'success');
            }

            saveData();
            renderTasks();
            closeModal();
        });

        // Delete task
        deleteTaskBtn.addEventListener('click', () => {
            if (editingTaskId) {
                tasks = tasks.filter(t => t.id !== editingTaskId);
                saveData();
                renderTasks();
                closeModal();
                showToast(t('toastTaskDeleted'), 'info');
            }
        });

        // Clipboard add text
        addClipboardBtn.addEventListener('click', () => {
            addClipboardItem(clipboardInput.value, 'text');
            clipboardInput.value = '';
            showToast(t('toastClipboardSaved'), 'success');
        });

        // Clipboard paste shortcut in textarea
        clipboardInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                addClipboardItem(clipboardInput.value, 'text');
                clipboardInput.value = '';
                showToast(t('toastSaved'), 'success');
            }
        });

        // Task input: Shift+Enter to save
        taskInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.shiftKey) {
                e.preventDefault();
                saveTaskBtn.click();
            }
        });

        // Image upload button
        imageUploadBtn.addEventListener('click', () => {
            imageInput.click();
        });

        // Image input change
        imageInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                handleImageUpload(e.target.files[0]);
                e.target.value = '';
            }
        });

        // GLOBAL PASTE - Text und Bilder direkt aus Zwischenablage
        document.addEventListener('paste', async (e) => {
            const activeEl = document.activeElement;
            const isInInput = activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'INPUT';

            const items = e.clipboardData?.items;
            if (!items) return;

            let hasImage = false;

            for (let item of items) {
                if (item.type.startsWith('image/')) {
                    hasImage = true;
                    const blob = item.getAsFile();
                    if (blob) {
                        e.preventDefault();
                        handleImageFromBlob(blob);
                        return;
                    }
                }
            }

            if (!isInInput && !hasImage) {
                const text = e.clipboardData?.getData('text');
                if (text && text.trim()) {
                    e.preventDefault();
                    addClipboardItem(text.trim(), 'text');
                    showToast(t('toastTextSaved'), 'success');
                }
            }
        });

        // Drag and drop images
        const clipboardPanel = document.querySelector('.clipboard-panel');
        clipboardPanel.addEventListener('dragover', (e) => {
            e.preventDefault();
            clipboardPanel.classList.add('drag-hover');
        });

        clipboardPanel.addEventListener('dragleave', () => {
            clipboardPanel.classList.remove('drag-hover');
        });

        clipboardPanel.addEventListener('drop', (e) => {
            e.preventDefault();
            clipboardPanel.classList.remove('drag-hover');

            const files = e.dataTransfer.files;
            if (files.length > 0 && files[0].type.startsWith('image/')) {
                handleImageUpload(files[0]);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // ESC to close modals (check in order of priority)
            if (e.key === 'Escape') {
                const confirmModal = document.getElementById('confirm-modal');
                const archiveLogsModal = document.getElementById('archive-logs-modal');
                
                if (!confirmModal.classList.contains('hidden')) {
                    closeConfirmModal();
                } else if (!modal.classList.contains('hidden')) {
                    closeModal();
                } else if (!infoModal.classList.contains('hidden')) {
                    closeInfoModal();
                } else if (!settingsModal.classList.contains('hidden')) {
                    closeSettingsModal();
                } else if (!archiveLogsModal.classList.contains('hidden')) {
                    archiveService.closeModal();
                }
                // TimeTracker modal handled by module
            }
            // Ctrl+B to open new task modal
            if (e.key === 'b' && e.ctrlKey) {
                e.preventDefault();
                openAddModal();
            }
        });

        // Keyboard support for close buttons (Enter/Space)
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
        });

        // Settings Modal Events
        settingsBtn.addEventListener('click', openSettingsModal);
        settingsCloseBtn.addEventListener('click', closeSettingsModal);
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) closeSettingsModal();
        });
        cancelSettingsBtn.addEventListener('click', closeSettingsModal);

        // Palette selection
        paletteOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                selectedPalette = opt.dataset.palette;
                updatePaletteSelection();
                // Preview the palette immediately
                applyColorPalette(selectedPalette);
            });
        });

        // Language selection
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                selectedLanguage = opt.dataset.lang;
                setLanguage(selectedLanguage);
                updateLanguageSelection();
                // Preview the language immediately
                applyTranslations();
                updateDateTime();
            });
        });

        // Save settings
        saveSettingsBtn.addEventListener('click', async () => {
            // Save sync settings first
            const syncSaved = await saveSyncSettings();
            if (!syncSaved) return; // Don't close modal if sync settings failed
            
            saveSettingsData();
            closeSettingsModal();
            showToast(t('toastSettingsSaved'), 'success');
        });

        // Drag and drop tasks
        setupDragAndDrop();
    }

    function setupDragAndDrop() {
        const columns = document.querySelectorAll('.column');
        let lastDragOverTime = 0;

        columns.forEach(column => {
            const taskList = column.querySelector('.task-list');
            let lastAfterElement = null;

            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                column.classList.add('drag-over');

                // Throttle DOM manipulation to prevent flickering
                const now = Date.now();
                if (now - lastDragOverTime < DRAG_THROTTLE_MS) return;
                lastDragOverTime = now;

                const afterElement = getDragAfterElement(taskList, e.clientY);
                const draggable = document.querySelector('.dragging');

                if (draggable) {
                    // Only manipulate DOM if position actually changed
                    if (afterElement !== lastAfterElement || draggable.parentNode !== taskList) {
                        lastAfterElement = afterElement;
                        if (afterElement == null) {
                            if (draggable.nextElementSibling !== null || draggable.parentNode !== taskList) {
                                taskList.appendChild(draggable);
                            }
                        } else {
                            if (draggable.nextElementSibling !== afterElement) {
                                taskList.insertBefore(draggable, afterElement);
                            }
                        }
                    }
                }
            });

            column.addEventListener('dragleave', (e) => {
                if (!column.contains(e.relatedTarget)) {
                    column.classList.remove('drag-over');
                    lastAfterElement = null;
                }
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                column.classList.remove('drag-over');
                lastAfterElement = null;

                const newStatus = column.dataset.status;
                if (currentDragItem && currentDragItem.status !== newStatus) {
                    if (!currentDragItem.history) {
                        currentDragItem.history = [];
                    }
                    currentDragItem.history.push({
                        status: newStatus,
                        timestamp: Date.now()
                    });

                    currentDragItem.status = newStatus;
                    saveData();
                    renderTasks();

                    showToast(`${t('toastMovedTo')} "${getStatusLabel(newStatus)}"`, 'success');
                }
            });
        });
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});
