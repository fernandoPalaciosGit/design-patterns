var reporter, utilsTask = require('../UtilsTask');

module.exports = function (grunt) {
    reporter = utilsTask.getMochaReporter(grunt);

    return {
        dev: {
            src: [
                'test/platzi.html',
                'test/osmani-oreilly.html'
            ],
            dest: reporter,
            options: {
                reporter: 'spec',
                run: true,
                logErrors: true,
                log: true
            }
        }
    };
};
