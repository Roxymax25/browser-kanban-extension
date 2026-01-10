document.addEventListener('DOMContentLoaded', () => {
    // SVG Icon templates
    const icons = {
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
        info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
    };

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

    // DOM Elements - Time Tracker
    const trackerTimeEl = document.getElementById('tracker-time');
    const trackerDisplay = document.querySelector('.tracker-display');
    const trackerStartBtn = document.getElementById('tracker-start-btn');
    const trackerPauseBtn = document.getElementById('tracker-pause-btn');
    const trackerLogBtn = document.getElementById('tracker-log-btn');
    const worktimeModal = document.getElementById('worktime-modal');
    const worktimeCloseBtn = document.querySelector('.worktime-close-btn');
    const worktimeEntriesEl = document.getElementById('worktime-entries');
    const worktimeSummaryEl = document.getElementById('worktime-summary');
    const clearWorktimeBtn = document.getElementById('clear-worktime-btn');

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

    // Time Tracker State
    let workTimeSessions = [];
    let timeTracker = {
        isRunning: false,
        isPaused: false,
        startTime: null,
        pauseStartTime: null,
        totalPausedTime: 0
    };
    let trackerInterval = null;

    // Settings State
    let selectedPalette = 'sunset-orange';
    let selectedLanguage = 'de';

    // Translations
    const translations = {
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

            // Toast Messages
            toastCopied: 'In Zwischenablage kopiert!',
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
            unknown: 'Unbekannt'
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

            // Toast Messages
            toastCopied: 'Copied to clipboard!',
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
            unknown: 'Unknown'
        }
    };

    // Get translation helper
    function t(key) {
        return translations[selectedLanguage][key] || translations['de'][key] || key;
    }

    // Color Palettes Definition
    const colorPalettes = {
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

    // Initialize
    init();

    function init() {
        loadData();
        loadSettings();
        updateDateTime();
        setInterval(updateDateTime, 1000);
        setInterval(renderTasks, 60000);
        setupEventListeners();
    }

    function loadData() {
        chrome.storage.local.get(['tasks', 'clipboardItems', 'workTimeSessions', 'timeTracker'], (result) => {
            if (result.tasks) {
                tasks = result.tasks;
            }
            if (result.clipboardItems) {
                clipboardItems = result.clipboardItems;
            }
            if (result.workTimeSessions) {
                workTimeSessions = result.workTimeSessions;
            }
            if (result.timeTracker && result.timeTracker.isRunning) {
                // Restore running timer
                timeTracker = result.timeTracker;
                resumeTrackerFromStorage();
            }
            renderTasks();
            renderClipboardItems();
            updateStats();
        });
    }

    function saveData() {
        chrome.storage.local.set({
            tasks: tasks,
            clipboardItems: clipboardItems,
            workTimeSessions: workTimeSessions,
            timeTracker: timeTracker
        });
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

    function formatDateTime(timestamp) {
        const date = new Date(timestamp);
        const locale = selectedLanguage === 'en' ? 'en-GB' : 'de-DE';
        return date.toLocaleDateString(locale, {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const locale = selectedLanguage === 'en' ? 'en-GB' : 'de-DE';
        return date.toLocaleDateString(locale, {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
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

    function renderTasks() {
        [todoList, inProgressList, doneList].forEach(list => list.innerHTML = '');

        // Sort by priority: high > medium > low
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        const sortedTasks = [...tasks].sort((a, b) => {
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
                        <button class="task-action-btn copy-btn" title="In Zwischenablage kopieren">${icons.copy}</button>
                        <button class="task-action-btn info-btn" title="Zusätzliche Info">${icons.info}</button>
                        <button class="task-action-btn delete-btn" title="Löschen">${icons.trash}</button>
                    </div>
                    <span class="task-priority priority-${task.priority || 'medium'}">${getPriorityLabel(task.priority)}</span>
                </div>
            </div>
        `;

        // Drag events
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

        // Click to edit
        div.addEventListener('click', (e) => {
            if (e.target.closest('.task-action-btn')) return;
            openEditModal(task);
        });

        // Copy button
        div.querySelector('.copy-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            copyToClipboard(task.content);
            showToast(t('toastCopied'), 'success');
        });

        // Delete button
        div.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            saveData();
            renderTasks();
            showToast(t('toastTaskDeleted'), 'info');
        });

        // Info button
        div.querySelector('.info-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openInfoModal(task);
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

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ============ CLIPBOARD FUNCTIONS ============

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

        clipboardItems.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'clipboard-item';

            let contentHtml = '';
            if (item.type === 'image') {
                contentHtml = `<img src="${item.content}" class="clipboard-image" alt="${t('image')}"/>`;
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

            // Copy button
            itemEl.querySelector('.copy').addEventListener('click', () => {
                if (item.type === 'image') {
                    copyImageToClipboard(item.content);
                } else {
                    copyToClipboard(item.content);
                }
                showToast(t('toastCopied'), 'success');
            });

            // Add as task button (only for text)
            const taskBtn = itemEl.querySelector('.task');
            if (taskBtn) {
                taskBtn.addEventListener('click', () => {
                    const newTask = {
                        id: Date.now().toString(),
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
                });
            }

            // Delete button
            itemEl.querySelector('.delete').addEventListener('click', () => {
                clipboardItems.splice(index, 1);
                saveData();
                renderClipboardItems();
                showToast(t('toastDeleted'), 'info');
            });

            // Click to copy
            itemEl.addEventListener('click', (e) => {
                if (e.target.closest('.clipboard-item-btn')) return;
                if (item.type === 'image') {
                    copyImageToClipboard(item.content);
                } else {
                    copyToClipboard(item.content);
                }
                showToast(t('toastCopied'), 'success');
            });

            clipboardItemsContainer.appendChild(itemEl);
        });
    }

    function addClipboardItem(content, type = 'text') {
        if (!content || (type === 'text' && !content.trim())) return;

        const newItem = {
            id: Date.now().toString(),
            content: type === 'text' ? content.trim() : content,
            type: type,
            createdAt: Date.now()
        };

        clipboardItems.unshift(newItem);
        if (clipboardItems.length > 50) {
            clipboardItems.pop();
        }
        saveData();
        renderClipboardItems();
    }

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
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

        if (file.size > 2 * 1024 * 1024) {
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
        if (blob.size > 2 * 1024 * 1024) {
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
        }, 300);
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
        }, 300);
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

    // ============ SETTINGS FUNCTIONS ============

    function loadSettings() {
        chrome.storage.local.get(['selectedPalette', 'selectedLanguage'], (result) => {
            if (result.selectedPalette && colorPalettes[result.selectedPalette]) {
                selectedPalette = result.selectedPalette;
                applyColorPalette(selectedPalette);
                updatePaletteSelection();
            }
            if (result.selectedLanguage && translations[result.selectedLanguage]) {
                selectedLanguage = result.selectedLanguage;
            }
            // Always apply translations and update UI
            updateLanguageSelection();
            applyTranslations();
            updateDateTime();
        });
    }

    function saveSettingsData() {
        chrome.storage.local.set({
            selectedPalette: selectedPalette,
            selectedLanguage: selectedLanguage
        });
    }

    function openSettingsModal() {
        updatePaletteSelection();
        updateLanguageSelection();
        settingsModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            settingsModal.classList.add('visible');
        });
    }

    function closeSettingsModal() {
        settingsModal.classList.remove('visible');
        setTimeout(() => {
            settingsModal.classList.add('hidden');
        }, 300);
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

    function applyTranslations() {
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

        // Tooltips
        document.getElementById('add-task-btn').title = t('tooltipNewTask');
        document.getElementById('export-done-btn').title = t('tooltipExport');
        document.getElementById('settings-btn').title = t('tooltipSettings');

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
        if (!timeTracker.isRunning) {
            trackerStartBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                ${t('start')}
            `;
        }
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
        }, 3000);
    }

    // ============ TIME TRACKER FUNCTIONS ============

    function resumeTrackerFromStorage() {
        updateTrackerUI();
        if (!timeTracker.isPaused) {
            trackerInterval = setInterval(updateTrackerDisplay, 1000);
        }
        updateTrackerDisplay();
    }

    function startTracker() {
        timeTracker.isRunning = true;
        timeTracker.isPaused = false;
        timeTracker.startTime = Date.now();
        timeTracker.totalPausedTime = 0;
        timeTracker.pauseStartTime = null;

        updateTrackerUI();
        trackerInterval = setInterval(updateTrackerDisplay, 1000);
        saveData();
        showToast(t('toastTrackerStarted'), 'success');
    }

    function stopTracker() {
        if (!timeTracker.isRunning) return;

        const endTime = Date.now();
        const duration = endTime - timeTracker.startTime - timeTracker.totalPausedTime;

        // Save session
        const session = {
            id: Date.now().toString(),
            startTime: timeTracker.startTime,
            endTime: endTime,
            duration: duration,
            pausedTime: timeTracker.totalPausedTime
        };
        workTimeSessions.unshift(session);

        // Reset tracker
        timeTracker.isRunning = false;
        timeTracker.isPaused = false;
        timeTracker.startTime = null;
        timeTracker.totalPausedTime = 0;
        timeTracker.pauseStartTime = null;

        clearInterval(trackerInterval);
        trackerInterval = null;

        updateTrackerUI();
        trackerTimeEl.textContent = '00:00:00';
        saveData();
        showToast(`${t('toastWorktimeSaved')} ${formatTrackerTime(duration)}`, 'success');
    }

    function pauseTracker() {
        if (!timeTracker.isRunning || timeTracker.isPaused) return;

        timeTracker.isPaused = true;
        timeTracker.pauseStartTime = Date.now();

        clearInterval(trackerInterval);
        trackerInterval = null;

        updateTrackerUI();
        saveData();
        showToast(t('toastTrackerPaused'), 'info');
    }

    function resumeTracker() {
        if (!timeTracker.isRunning || !timeTracker.isPaused) return;

        timeTracker.totalPausedTime += Date.now() - timeTracker.pauseStartTime;
        timeTracker.isPaused = false;
        timeTracker.pauseStartTime = null;

        trackerInterval = setInterval(updateTrackerDisplay, 1000);

        updateTrackerUI();
        saveData();
        showToast(t('toastTrackerResumed'), 'success');
    }

    function updateTrackerDisplay() {
        if (!timeTracker.isRunning) return;

        let elapsed = Date.now() - timeTracker.startTime - timeTracker.totalPausedTime;
        if (timeTracker.isPaused && timeTracker.pauseStartTime) {
            elapsed = timeTracker.pauseStartTime - timeTracker.startTime - timeTracker.totalPausedTime;
        }

        trackerTimeEl.textContent = formatTrackerTime(elapsed);
    }

    function updateTrackerUI() {
        if (timeTracker.isRunning) {
            trackerStartBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                Stop
            `;
            trackerStartBtn.classList.add('running');
            trackerPauseBtn.disabled = false;

            if (timeTracker.isPaused) {
                trackerDisplay.classList.remove('running');
                trackerDisplay.classList.add('paused');
                trackerPauseBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Weiter
                `;
                trackerPauseBtn.classList.add('paused');
            } else {
                trackerDisplay.classList.add('running');
                trackerDisplay.classList.remove('paused');
                trackerPauseBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                    Pause
                `;
                trackerPauseBtn.classList.remove('paused');
            }
        } else {
            trackerStartBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Start
            `;
            trackerStartBtn.classList.remove('running');
            trackerPauseBtn.disabled = true;
            trackerPauseBtn.classList.remove('paused');
            trackerDisplay.classList.remove('running', 'paused');
            trackerPauseBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                Pause
            `;
        }
    }

    function formatTrackerTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function openWorktimeModal() {
        renderWorktimeEntries();
        worktimeModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            worktimeModal.classList.add('visible');
        });
    }

    function closeWorktimeModal() {
        worktimeModal.classList.remove('visible');
        setTimeout(() => {
            worktimeModal.classList.add('hidden');
        }, 300);
    }

    function renderWorktimeEntries() {
        // Calculate summary
        const totalDuration = workTimeSessions.reduce((sum, s) => sum + s.duration, 0);
        const sessionCount = workTimeSessions.length;

        worktimeSummaryEl.innerHTML = `
            <div class="summary-item">
                <div class="summary-label">${t('total')}</div>
                <div class="summary-value">${formatTrackerTime(totalDuration)}</div>
            </div>
            <div class="summary-item">
                <div class="summary-label">${t('sessions')}</div>
                <div class="summary-value">${sessionCount}</div>
            </div>
        `;

        if (workTimeSessions.length === 0) {
            worktimeEntriesEl.innerHTML = `
                <div class="worktime-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div>${t('noWorktimeRecorded')}</div>
                </div>
            `;
            return;
        }

        let html = '';
        workTimeSessions.forEach((session, index) => {
            const startDate = new Date(session.startTime);
            const endDate = new Date(session.endTime);
            const locale = selectedLanguage === 'en' ? 'en-GB' : 'de-DE';
            const dateStr = startDate.toLocaleDateString(locale, { weekday: 'short', day: '2-digit', month: '2-digit', year: '2-digit' });
            const startTimeStr = startDate.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
            const endTimeStr = endDate.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });

            html += `
                <div class="worktime-entry" data-index="${index}">
                    <div class="worktime-entry-info">
                        <div class="worktime-entry-date">${dateStr}</div>
                        <div class="worktime-entry-times">${startTimeStr} - ${endTimeStr}</div>
                    </div>
                    <div class="worktime-entry-duration">${formatTrackerTime(session.duration)}</div>
                    <button class="worktime-entry-delete" data-id="${session.id}">
                        ${icons.trash}
                    </button>
                </div>
            `;
        });
        worktimeEntriesEl.innerHTML = html;

        // Add delete listeners
        worktimeEntriesEl.querySelectorAll('.worktime-entry-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                workTimeSessions = workTimeSessions.filter(s => s.id !== id);
                saveData();
                renderWorktimeEntries();
                showToast(t('toastEntryDeleted'), 'info');
            });
        });
    }

    function clearAllWorktime() {
        if (workTimeSessions.length === 0) return;
        workTimeSessions = [];
        saveData();
        renderWorktimeEntries();
        showToast(t('toastAllEntriesDeleted'), 'info');
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
        // Add task button
        addTaskBtn.addEventListener('click', openAddModal);

        // Export done tasks button
        const exportDoneBtn = document.getElementById('export-done-btn');
        exportDoneBtn.addEventListener('click', exportDoneTasks);

        // Modal close
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
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
                    id: Date.now().toString(),
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

            const items = e.clipboardData.items;
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
                const text = e.clipboardData.getData('text');
                if (text.trim()) {
                    addClipboardItem(text, 'text');
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
            if (e.key === 'Escape') {
                if (!modal.classList.contains('hidden')) {
                    closeModal();
                } else if (!infoModal.classList.contains('hidden')) {
                    closeInfoModal();
                } else if (!worktimeModal.classList.contains('hidden')) {
                    closeWorktimeModal();
                } else if (!settingsModal.classList.contains('hidden')) {
                    closeSettingsModal();
                }
            }
            if (e.key === 'b' && e.ctrlKey) {
                e.preventDefault();
                openAddModal();
            }
        });

        // Time Tracker Event Listeners
        trackerStartBtn.addEventListener('click', () => {
            if (timeTracker.isRunning) {
                stopTracker();
            } else {
                startTracker();
            }
        });

        trackerPauseBtn.addEventListener('click', () => {
            if (timeTracker.isPaused) {
                resumeTracker();
            } else {
                pauseTracker();
            }
        });

        trackerLogBtn.addEventListener('click', openWorktimeModal);

        // Worktime Modal Events
        worktimeCloseBtn.addEventListener('click', closeWorktimeModal);
        worktimeModal.addEventListener('click', (e) => {
            if (e.target === worktimeModal) closeWorktimeModal();
        });
        clearWorktimeBtn.addEventListener('click', clearAllWorktime);

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
                updateLanguageSelection();
                // Preview the language immediately
                applyTranslations();
                updateDateTime();
            });
        });

        // Save settings
        saveSettingsBtn.addEventListener('click', () => {
            saveSettingsData();
            closeSettingsModal();
            showToast(t('toastSettingsSaved'), 'success');
        });

        // Drag and drop tasks
        setupDragAndDrop();
    }

    function setupDragAndDrop() {
        const columns = document.querySelectorAll('.column');

        columns.forEach(column => {
            const taskList = column.querySelector('.task-list');

            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                column.classList.add('drag-over');

                const afterElement = getDragAfterElement(taskList, e.clientY);
                const draggable = document.querySelector('.dragging');

                if (draggable) {
                    if (afterElement == null) {
                        taskList.appendChild(draggable);
                    } else {
                        taskList.insertBefore(draggable, afterElement);
                    }
                }
            });

            column.addEventListener('dragleave', (e) => {
                if (!column.contains(e.relatedTarget)) {
                    column.classList.remove('drag-over');
                }
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                column.classList.remove('drag-over');

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
