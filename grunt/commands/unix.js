'use strict';

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
    }
};
