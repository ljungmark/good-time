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
