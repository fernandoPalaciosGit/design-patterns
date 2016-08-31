'use strict';

module.exports = {
    installGitHooks: {
        command: 'xcopy git-hooks <%= projectPaths.git %>'
    },
    openCoverageBrowser: {
        command: [
            'start chrome \"<%= mocha.coverageReporter %>/html/index.html\"',
            'exit'
        ].join(' && ')
    }
};
