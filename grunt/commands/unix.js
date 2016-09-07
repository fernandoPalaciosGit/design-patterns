'use strict';

var getProyectPath = require('./../UtilsTask').getProyectPath;

module.exports = {
    installGitHooks: {
        command: [
            'chmod +x -R <%= projectPaths.git %>',
            'cp -a git-hooks/. <%= projectPaths.git %>/'
        ].join(' && ')
    },
    openCoverageBrowser: {
        command: [
            'googlePath=$(which google-chrome)',
            '${googlePath} \"<%= mocha.coverageReporter %>/html/index.html\"',
            'exit'
        ].join(' && ')
    },
    openTestBrowser: {
        command: [
            'googlePath=$(which google-chrome)',
            '${googlePath} \"' + getProyectPath('<%= mocha.phantomResources[grunt.option(\'testbrowser\')] %>') + '\"',
            'exit'
        ].join(' && ')
    }
};
