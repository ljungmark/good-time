(function update() {
    const date = new Date();
    document.querySelector('time').innerHTML = `${("00" + date.getHours()).slice(-2)}:${("00" + date.getMinutes()).slice(-2)}`;
    setTimeout(update, 60000 - (Date.now() % 60000));
})();
