module.exports = function (grunt) {
    'use strict';

    var utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        logger = utilsTask.logger,
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Unit test for js modules with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'mocha:coverage'
            //'verifyOutput:coverage',
            //'clean:coverage'
            // 'readmeCoverage' // copy coverage.html report to readme
        ])
        .setConfigTask(function (grunt) {
            var listReporter = grunt.config.get('mocha.reporters'),
                maskReporter = grunt.config.get('mocha.masks'),
                reporter = grunt.option('reporter'),
                mask = grunt.option('mask');

            try {
                grunt.config.set('mochaReporterOutput', utilsTask.validateMochaReporter(listReporter, reporter));
                grunt.config.set('mochaReporterMask', utilsTask.validateMochaReporter(maskReporter, mask));

            } catch (err) {
                logger.alert(err.message);
                global.process.exit(0);
            }
        })
        .register();
};
