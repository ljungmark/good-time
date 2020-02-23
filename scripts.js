(function update() {
    document.querySelector('time').innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTimeout(update, 60000 - (Date.now() % 60000));
})();
