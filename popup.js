document.querySelector('.hour12').addEventListener('change', _ => {
    chrome.storage.sync.set({
        'hour12': document.querySelector('.hour12').checked
    }, function () {
    });
});
chrome.storage.sync.get(['hour12'], function(result) {
    document.querySelector('.hour12').checked = result.hour12;
});
chrome.storage.onChanged.addListener(_ => {
    chrome.storage.sync.get(['hour12'], function(result) {
        document.querySelector('.hour12').checked = result.hour12;
    });
});
