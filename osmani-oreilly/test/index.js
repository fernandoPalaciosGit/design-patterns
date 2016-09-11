'use strict';

var initializeTest, hasLoadedTestWithBrowser;

hasLoadedTestWithBrowser = function (browserName) {
    return navigator.userAgent.toLowerCase().indexOf(browserName.toLowerCase()) !== -1;
};

mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true,
    asyncOnly: true
});

initializeTest = function () {
    if (!hasLoadedTestWithBrowser('PhantomJS')) {
        mocha.run();
    }
};

window.addEventListener('load', initializeTest);
