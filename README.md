# Dashboard & Zwischenablage

Eine Chrome Extension für persönliches Aufgaben- und Zwischenablage-Management mit modernem Dark-Theme Design.

![Version](https://img.shields.io/badge/version-2.9-orange)
![Chrome](https://img.shields.io/badge/chrome-extension-green)

## 🎯 Features

### 📋 Kanban-Board

- **Drei Spalten**: Zu erledigen → In Bearbeitung → Erledigt
- **Drag & Drop**: Aufgaben einfach zwischen Spalten verschieben
- **Prioritäten**: Niedrig (grün), Mittel (orange), Hoch (rot)
- **Automatische Sortierung**: Aufgaben werden nach Priorität sortiert
- **Zusätzliche Info**: Optionale Notizen zu jeder Aufgabe hinzufügen
- **Timer**: Zeigt automatisch die Bearbeitungszeit bei aktiven Aufgaben
- **Status-Verlauf**: Historie aller Statusänderungen im Detail-Modal

### 📝 Zwischenablage

- **Text speichern**: Texte direkt in die Zwischenablage einfügen
- **Bilder speichern**: Bilder per Drag & Drop oder Paste hinzufügen
- **Schnelles Kopieren**: Ein-Klick-Kopieren zurück in die Systemzwischenablage
- **Aufgabe erstellen**: Direkt aus Zwischenablage-Einträgen neue Aufgaben anlegen
- **Globales Paste**: `Strg+V` überall im Dashboard speichert automatisch

### ⏱️ Arbeitszeittracking

- **Start/Stop**: Arbeitssession starten und beenden
- **Pause/Weiter**: Sessions pausieren ohne zu beenden
- **Session-Log**: Alle gespeicherten Arbeitszeiten einsehen
- **Gesamtzeit**: Automatische Berechnung der Gesamtarbeitszeit
- **Persistenz**: Timer läuft weiter, auch wenn Tab geschlossen wird

### 📤 Export

- **Markdown-Export**: Erledigte Aufgaben als Markdown kopieren
- Enthält Bearbeitungszeit und Abschlusszeitpunkt

## ⌨️ Tastenkürzel

| Kürzel | Aktion |
|--------|--------|
| `Strg+N` | Neue Aufgabe erstellen |
| `Shift+Enter` | Aufgabe/Info speichern (im Modal) |
| `Escape` | Modal schließen |
| `Strg+V` | Text/Bild in Zwischenablage speichern |

## 🎨 Design

- **Dark Theme**: Augenfreundliches dunkles Design
- **Orange Akzente**: Moderne Farbakzente
- **Glasmorphism**: Subtile Transparenzeffekte
- **Animationen**: Sanfte Übergänge und Hover-Effekte
- **Responsive**: Anpassung an verschiedene Fenstergrößen

## 📦 Installation

1. Repository klonen oder als ZIP herunterladen
2. Chrome öffnen → `chrome://extensions`
3. "Entwicklermodus" aktivieren (oben rechts)
4. "Entpackte Erweiterung laden" klicken
5. Projektordner auswählen

## 🚀 Verwendung

- **Extension-Icon klicken** → Dashboard öffnet sich in neuem Tab
- **Erneut klicken** → Springt zum vorhandenen Dashboard-Tab
- Alle Daten werden automatisch in Chrome gespeichert

## 📁 Dateistruktur

```
ChromePlugin_Notes/
├── manifest.json      # Extension-Konfiguration
├── index.html         # Dashboard-Struktur
├── script.js          # Logik & Funktionen
├── style.css          # Styling
├── background.js      # Tab-Management
├── icon.png           # Extension-Icon
└── README.md          # Diese Datei
```

## 🔧 Technologien

- **Vanilla JavaScript** (keine Frameworks)
- **CSS3** mit Custom Properties
- **Chrome Storage API** für Datenpersistenz
- **Lucide Icons** (inline SVG)

## 📄 Lizenz

MIT License - Frei verwendbar und anpassbar.

---

*Entwickelt mit ❤️ für produktives Arbeiten*
