/**
 * ClipboardPanel Module
 * Handles clipboard management functionality
 */

import { t } from '../utils/i18n.js';
import { escapeHtml, formatDateTime, generateId } from '../utils/helpers.js';
import { ICONS } from '../config/icons.js';
import { MAX_CLIPBOARD_ITEMS, MAX_IMAGE_SIZE_BYTES } from '../config/constants.js';

export class ClipboardPanel {
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
