# Dashboard & Clipboard

A Chrome Extension for personal task and clipboard management with a modern dark-theme design.

![Version](https://img.shields.io/badge/version-3.2-orange)
![Chrome](https://img.shields.io/badge/chrome-extension-green)

## Features

### Kanban Board

- **Three Columns**: To Do → In Progress → Done
- **Drag & Drop**: Easily move tasks between columns
- **Priorities**: Low (green), Medium (orange), High (red)
- **Auto Sorting**: Tasks are sorted by priority
- **Pin Tasks**: Pin important tasks to the top
- **Additional Info**: Add optional notes to each task
- **Timer**: Automatically shows processing time for active tasks
- **Status History**: View history of all status changes in detail modal
- **Task Archive**: Archive completed tasks with searchable logs

### Clipboard

- **Save Text**: Insert text directly into the clipboard
- **Save Images**: Add images via Drag & Drop or Paste
- **Quick Copy**: One-click copy back to system clipboard
- **Create Task**: Create new tasks directly from clipboard entries
- **Global Paste**: `Ctrl+V` anywhere on the dashboard saves automatically

### Work Time Tracking

- **Start/Stop**: Start and end work sessions
- **Pause/Resume**: Pause sessions without ending them
- **Session Log**: View all saved work times with notes
- **Total Time**: Automatic calculation of total work time
- **Persistence**: Timer continues even when tab is closed

### Settings

- **Language**: Switch between German and English
- **Theme**: Dark and Light mode
- **Color Palettes**: Choose from 6 different color themes

### Export & Archive

- **Markdown Export**: Copy completed tasks as Markdown
- **Task Archive**: Archive done tasks with filtering by priority and time
- **Search**: Full-text search through archived tasks

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` | Create new task |
| `Shift+Enter` | Save task/info (in modal) |
| `Escape` | Close modal |
| `Ctrl+V` | Save text/image to clipboard |
| `Enter/Space` | Activate focused button |

## Accessibility

- Full keyboard navigation support
- ARIA labels for screen readers
- Focus indicators for all interactive elements
- Dynamic language attribute for proper screen reader pronunciation

## Design

- **Dark Theme**: Eye-friendly dark design (with light mode option)
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
├── manifest.json          # Extension configuration
├── index.html             # Dashboard structure
├── script.js              # Main application logic
├── style.css              # Styling
├── background.js          # Tab management
├── icon.png               # Extension icon
├── PRIVACY.md             # Privacy policy
├── README.md              # This file
└── modules/
    ├── config/
    │   ├── constants.js       # Application constants
    │   ├── colorPalettes.js   # Color theme definitions
    │   ├── icons.js           # SVG icon definitions
    │   └── translations.js    # i18n translations (DE/EN)
    ├── services/
    │   ├── storage.js         # Chrome storage abstraction
    │   └── ArchiveService.js  # Task archive management
    ├── ui/
    │   ├── ClipboardPanel.js  # Clipboard UI module
    │   └── TimeTracker.js     # Work time tracker module
    └── utils/
        ├── helpers.js         # Utility functions
        └── i18n.js            # Internationalization
```

## Technologies

- **Vanilla JavaScript** (ES6 modules, no frameworks)
- **CSS3** with Custom Properties
- **Chrome Storage API** for data persistence
- **Lucide Icons** (inline SVG)

## Version History

### v3.2 (January 2026)
- **Code Quality**: Major refactoring with 21% code reduction
- **Performance**: Event delegation to prevent memory leaks
- **Accessibility**: Added ARIA labels, keyboard navigation, dynamic lang attribute
- **Error Handling**: Proper async/await with error propagation
- **Standards**: Removed deprecated APIs, centralized constants
- **Security**: Added image data URL validation

### v3.1
- Task archive system with search and filters
- Pin tasks feature
- Light/Dark theme toggle

### v3.0
- Modular architecture
- Work time tracking with persistence
- Multi-language support (DE/EN)
- Color palette customization

## Privacy

All data is stored **locally only** on your device using Chrome's Storage API. No data is transmitted to external servers. See [PRIVACY.md](PRIVACY.md) for details.

## License

MIT License - Free to use and modify.
