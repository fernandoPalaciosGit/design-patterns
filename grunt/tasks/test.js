/**
 * Lint mocha test on browserify modules.
 * --reporter=spec,html,xunit
 * --mask=Spec,Dot,Nyan,Landing,List,Progress,Min,Html
 */
module.exports = function (grunt) {
    'use strict';

    var configTask,
        utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        logger = utilsTask.logger,
        newTask = gruntTask(grunt);

    configTask = function (grunt) {
        var listReporter = grunt.config.get('mocha.reporters'),
            maskReporter = grunt.config.get('mocha.masks'),
            reporter = grunt.option('reporter'),
            mask = grunt.option('mask');

        try {
            grunt.config.set('mochaReporterOutput', utilsTask.validateOptions(listReporter, reporter));
            grunt.config.set('mochaReporterMask', utilsTask.validateOptions(maskReporter, mask));
            grunt.config.set('verifyTest', 'unittest');

        } catch (err) {
            logger.alert(err.message);
            global.process.exit(0);
        }
    };

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Unit test for js modules with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'mocha:dev',
            'verifyOutput:force'
        ])
        .setConfigTask(configTask)
        .register();
};
