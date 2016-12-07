'use strict';

(function (window, navigator) {
    var configurationTest, initializeTest, hasLoadedTestWithBrowser;

    hasLoadedTestWithBrowser = function (browserName) {
        return typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf(browserName.toLowerCase()) !== -1;
    };

    configurationTest = function () {
        mocha.setup({
            ui: 'bdd',
            ignoreLeaks: true,
            asyncOnly: true,
            timeout: 5000
        });
    };

    initializeTest = function () {
        if (!hasLoadedTestWithBrowser('PhantomJS')) {
            mocha.run();
        }
    };

    configurationTest();
    window.addEventListener('load', initializeTest, false);
})(window, navigator);
