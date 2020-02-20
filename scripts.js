(function update() {
    const date = new Date();
    document.querySelector('time').innerHTML = `${("00" + date.getHours()).slice(-2)}:${("00" + date.getMinutes()).slice(-2)}`;
    setTimeout(update, 60000 - (Date.now() % 60000));
})();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-111552434-4', 'auto');
ga('set', 'checkProtocolTask', function(){}); /* http://stackoverflow.com/a/22152353/1958200 */
ga('require', 'displayfeatures'); /* https://developers.google.com/analytics/devguides/collection/analyticsjs/display-features */
ga('send', 'pageview', '/index.html');
