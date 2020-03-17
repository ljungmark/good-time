/* Render current time */
(update = function update() {
    chrome.storage.sync.get(['locale'], function(result) {
        const locale = result.locale === undefined ? [] : result.locale;

        document.querySelector('time').innerHTML = new Date().toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
        setTimeout(update, 60000 - (Date.now() % 60000));
    });
})();

/* When preference is updated, update the time */
chrome.storage.onChanged.addListener(_ => {
    chrome.storage.sync.get(['theme'], function(result) {
        update();

        document.querySelector('html').dataset.theme = (result.theme === undefined || result.theme === 'automatic') ? themeSystemPreference() : result.theme;
    });
});

function themeSystemPreference() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

/* Listen to system changes */
window.matchMedia('(prefers-color-scheme: dark)').addListener(_ => {
    chrome.storage.sync.get(['theme'], function(result) {
        document.querySelector('html').dataset.theme = (result.theme === undefined || result.theme === 'automatic') ? themeSystemPreference() : result.theme;
    });
});
