(function () {
    document.body.appendChild(document.createElement('time'));
    document.querySelector('time').innerHTML = 'Hello!';
    const date = new Date();
    document.querySelector('time').innerHTML = `${("00" + date.getHours()).slice(-2)}:${("00" + date.getMinutes()).slice(-2)}`;
})();
