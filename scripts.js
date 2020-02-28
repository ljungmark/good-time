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
chrome.storage.onChanged.addListener(_ => {
    chrome.storage.sync.get(['hour12'], function(result) {
        update(result.hour12);
    });
});
