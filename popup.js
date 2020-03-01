/* Store new preference */
document.querySelector('.hour12').addEventListener('change', _ => {
    chrome.storage.sync.set({
        'hour12': document.querySelector('.hour12').checked
    }, function () {
    });
});

/* Tick checkbox on load if it's stored in storage */
chrome.storage.sync.get(['hour12'], function(result) {
    document.querySelector('.hour12').checked = result.hour12;
});

/* Reflect changes made through popup in other tabs */
chrome.storage.onChanged.addListener(_ => {
    chrome.storage.sync.get(['hour12'], function(result) {
        document.querySelector('.hour12').checked = result.hour12;
    });
    chrome.storage.sync.get(['theme'], function(result) {
        document.querySelector(`.theme[value="${result.theme}"]`).checked = true;
    });
});

/* Store new theme preference */
document.querySelectorAll('.theme').forEach(element => element.addEventListener('change', element => {
    chrome.storage.sync.set({
        'theme': element.srcElement.value
    }, function () {
    });
}));

/* Tick checkbox on load if it's stored in storage */
chrome.storage.sync.get(['theme'], function(result) {
    document.querySelector(`.theme[value="${result.theme}"]`).checked = true;
});
