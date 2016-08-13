module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash'),
        utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = _.partial(gruntTask, grunt),
        listReporter = grunt.config.get('mochaListReporter'),
        reporter = grunt.option('reporter') || 'spec',
        reporterPath = utilsTask.getMochaReporter(listReporter, reporter);

    grunt.config.set('mochaReporter', reporterPath);

    newTask()
        .setName(utilsTask.getPath(__filename))
        .setDescription('Unit test for js modules with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'mocha:dev',
            'verifyOutput:force'
        ])
        .register();
};
