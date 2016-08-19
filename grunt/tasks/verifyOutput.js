'use strict';

var verifyOutput, newTask,
    _ = require('lodash'),
    logger = require('./../UtilsTask').logger,
    utilsTask = require('../UtilsTask'),
    gruntTask = require('../GruntTask');

/**
 * Check if the file is non-empty since verifying if the output is
 * correct based on the spec is kind of hard due to changing test running
 * times and different ways to report this time in reporters.
 */
verifyOutput = function (grunt) {
    var reporter = grunt.config.get('mocha.dev.dest');

    if (!grunt.file.read(reporter, 'utf8')) {
        grunt.fail.fatal('Empty reporter output: ' + reporter, 4);
        grunt.file.delete(reporter);

    } else {
        logger.info('Reporter output available on : ' + reporter);
    }
};

module.exports = function (grunt) {
    newTask = _.partial(gruntTask, grunt);
    newTask()
        .setName(utilsTask.getPath(__filename))
        .setDescription('Verify file output mocha tests.')
        .setTaskEvironment('dev')
        .setTasks(verifyOutput)
        .register();
};