/**
 * ArchiveService Module
 * Handles task archiving and archive log display
 */

import { t } from '../utils/i18n.js';
import { escapeHtml, formatDateTime, fuzzyMatch, safeSetHTML } from '../utils/helpers.js';
import { ICONS } from '../config/icons.js';

export class ArchiveService {
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
        this.entriesEl.replaceChildren();

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
            safeSetHTML(this.entriesEl, `
                <div class="archive-empty-state">
                    ${ICONS.archive}
                    <div>${t('noArchivedLogs')}</div>
                </div>
            `);
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

            safeSetHTML(entry, `
                <div class="archive-log-content">${escapeHtml(log.content)}</div>
                <div class="archive-log-meta">
                    <span>${ICONS.calendar} ${t('completedAt')}: ${formatDateTime(log.archivedAt)}</span>
                    <span class="task-priority priority-${log.priority || 'medium'}">${this.getPriorityLabel(log.priority)}</span>
                </div>
                ${log.additionalInfo ? `<div class="task-additional-info">${ICONS.info} ${escapeHtml(log.additionalInfo)}</div>` : ''}
                ${historyHtml}
            `);

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
