/* Render current time */
(update = function update(useHour12) {
    chrome.storage.sync.get(['hour12'], function(result) {
        if (result.hour12 === undefined) {
            chrome.storage.sync.set({
                'hour12': (new Date().toLocaleString().includes("M") ? true : false)
            }, function () {
            });
        }

        document.querySelector('time').innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: result.hour12 });
        setTimeout(update, 60000 - (Date.now() % 60000));
    });
})();

/* When preference is updated, update the time */
chrome.storage.onChanged.addListener(_ => {
    chrome.storage.sync.get(['hour12'], function(result) {
        update(result.hour12);
    });
    chrome.storage.sync.get(['theme'], function(result) {
        document.querySelector('html').dataset.theme = (result.theme === 'automatic') ? themeSystemPreference() : result.theme;
    });
});

/* Set theme */
chrome.storage.sync.get(['theme'], function(result) {
    if (result.theme === undefined) {
        chrome.storage.sync.set({
            'theme': 'automatic'
        }, function () {
        });
    }

    document.querySelector('html').dataset.theme = (result.theme === undefined || result.theme === 'automatic') ? themeSystemPreference() : result.theme;
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
        if (result.theme === undefined) {
            chrome.storage.sync.set({
                'theme': 'automatic'
            }, function () {
            });
        }

        document.querySelector('html').dataset.theme = (result.theme === undefined || result.theme === 'automatic') ? themeSystemPreference() : result.theme;
    });
 })
