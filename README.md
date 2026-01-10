# Dashboard & Clipboard

A Chrome Extension for personal task and clipboard management with a modern dark-theme design.

![Version](https://img.shields.io/badge/version-3.0-orange)
![Chrome](https://img.shields.io/badge/chrome-extension-green)

## Features

### Kanban Board

- **Three Columns**: To Do → In Progress → Done
- **Drag & Drop**: Easily move tasks between columns
- **Priorities**: Low (green), Medium (orange), High (red)
- **Auto Sorting**: Tasks are sorted by priority
- **Additional Info**: Add optional notes to each task
- **Timer**: Automatically shows processing time for active tasks
- **Status History**: View history of all status changes in detail modal

### Clipboard

- **Save Text**: Insert text directly into the clipboard
- **Save Images**: Add images via Drag & Drop or Paste
- **Quick Copy**: One-click copy back to system clipboard
- **Create Task**: Create new tasks directly from clipboard entries
- **Global Paste**: `Ctrl+V` anywhere on the dashboard saves automatically

### Work Time Tracking

- **Start/Stop**: Start and end work sessions
- **Pause/Resume**: Pause sessions without ending them
- **Session Log**: View all saved work times
- **Total Time**: Automatic calculation of total work time
- **Persistence**: Timer continues even when tab is closed

### Settings

- **Language**: Switch between German and English
- **Color Palettes**: Choose from 6 different color themes

### Export

- **Markdown Export**: Copy completed tasks as Markdown
- Includes processing time and completion timestamp

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` | Create new task |
| `Shift+Enter` | Save task/info (in modal) |
| `Escape` | Close modal |
| `Ctrl+V` | Save text/image to clipboard |

## Design

- **Dark Theme**: Eye-friendly dark design
- **Color Accents**: Modern accent colors (6 palettes available)
- **Glassmorphism**: Subtle transparency effects
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Adapts to different window sizes

## Installation

1. Clone repository or download as ZIP
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked"
5. Select the project folder

## Usage

- **Click extension icon**: Dashboard opens in a new tab
- **Click again**: Focuses the existing dashboard tab
- All data is automatically saved in Chrome storage

## File Structure

```
ChromePlugin_Notes/
├── manifest.json      # Extension configuration
├── index.html         # Dashboard structure
├── script.js          # Logic & functions
├── style.css          # Styling
├── background.js      # Tab management
├── icon.png           # Extension icon
├── PRIVACY.md         # Privacy policy
└── README.md          # This file
```

## Technologies

- **Vanilla JavaScript** (no frameworks)
- **CSS3** with Custom Properties
- **Chrome Storage API** for data persistence
- **Lucide Icons** (inline SVG)

## Privacy

All data is stored **locally only** on your device using Chrome's Storage API. No data is transmitted to external servers. See [PRIVACY.md](PRIVACY.md) for details.

## License

MIT License - Free to use and modify.
