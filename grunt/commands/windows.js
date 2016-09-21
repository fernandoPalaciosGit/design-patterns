'use strict';

var getProyectPath = require('./../UtilsTask').getProyectPath;

module.exports = {
    installGitHooks: {
        command: 'xcopy git-hooks <%= projectPaths.git %>'
    },
    openCoverageBrowser: {
        command: [
            'start chrome \"<%= mocha.coverageReporter %>/html/index.html\"',
            'exit'
        ].join(' && ')
    },
    openTestBrowser: {
        command: [
            'start chrome \"' + getProyectPath('<%= mocha.phantomResources[grunt.option(\'testbrowser\')] %>') + '\"',
            'exit'
        ].join(' && ')
    }
};
