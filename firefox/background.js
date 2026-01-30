// Background Script for Firefox MV2
// Öffnet das Dashboard wenn auf das Addon-Icon geklickt wird

// Firefox compatibility: use browser.* API
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.browserAction.onClicked.addListener(async () => {
    try {
        // Prüfen ob Dashboard schon offen ist
        const tabs = await browserAPI.tabs.query({});
        const extensionURL = browserAPI.runtime.getURL('index.html');
        
        const dashboardTab = tabs.find(tab => {
            const url = tab.url || '';
            return url.includes(extensionURL) || url.includes('index.html');
        });

        if (dashboardTab) {
            // Dashboard existiert -> fokussieren
            await browserAPI.tabs.update(dashboardTab.id, { active: true });
            await browserAPI.windows.update(dashboardTab.windowId, { focused: true });
        } else {
            // Dashboard öffnen mit absoluter URL
            await browserAPI.tabs.create({ url: extensionURL });
        }
    } catch (error) {
        console.error('Error opening dashboard:', error);
        // Fallback: einfach index.html öffnen
        browserAPI.tabs.create({ url: 'index.html' });
    }
});
