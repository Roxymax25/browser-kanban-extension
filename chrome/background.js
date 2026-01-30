// Background Service Worker
// Öffnet das Dashboard wenn auf das Addon-Icon geklickt wird

chrome.action.onClicked.addListener(async () => {
    // Prüfen ob Dashboard schon offen ist
    const tabs = await chrome.tabs.query({});
    const dashboardTab = tabs.find(tab => {
        const url = tab.url || '';
        return url.includes(chrome.runtime.id);
    });

    if (dashboardTab) {
        // Dashboard existiert -> fokussieren
        await chrome.tabs.update(dashboardTab.id, { active: true });
        await chrome.windows.update(dashboardTab.windowId, { focused: true });
    } else {
        // Dashboard öffnen
        await chrome.tabs.create({ url: 'index.html' });
    }
});
