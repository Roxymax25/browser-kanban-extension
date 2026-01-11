/**
 * TimeTracker Module
 * Handles work time tracking functionality
 */

import { t } from '../utils/i18n.js';
import { escapeHtml } from '../utils/helpers.js';
import { ICONS } from '../config/icons.js';

export class TimeTracker {
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
            id: Date.now().toString(),
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
