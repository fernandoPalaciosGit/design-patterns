module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash'),
        utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = gruntTask(grunt), configTask,
        listReporter = grunt.config.get('mochaListReporter'),
        maskReporter = grunt.config.get('mochaMaskReporter'),
        reporter = grunt.option('reporter'),
        mask = grunt.option('mask');

    configTask = function (grunt) {
        grunt.config.set('mochaReporterOutput', utilsTask.validateMochaReporter(listReporter, reporter));
        grunt.config.set('mochaReporterMask', utilsTask.validateMochaReporter(maskReporter, mask));
    };

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Unit test for js modules with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'mocha:dev',
            'verifyOutput:force'
        ])
        .setConfigTask(_.partial(_.bind(configTask, newTask), grunt))
        .register();
};
