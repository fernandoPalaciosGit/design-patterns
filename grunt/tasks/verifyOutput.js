/**
 * Verify output reports.
 */

'use strict';

var newTask, configTask,
    _ = require('lodash'),
    logger = require('./../UtilsTask').logger,
    utilsTask = require('../UtilsTask'),
    gruntTask = require('../GruntTask'),
    verifyOuptputByTarget = {
        unittest: _.identity,
        coverage: _.identity
    };

/**
 * Check if the file is non-empty since verifying if the output is
 * correct based on the spec is kind of hard due to changing test running
 * times and different ways to report this time in reporters.
 */
verifyOuptputByTarget.unittest = function (grunt) {
    var reporter = grunt.config.get('mocha.dev.dest');

    if (!grunt.file.read(reporter, 'utf8')) {
        grunt.fail.fatal('Empty reporter output: ' + reporter, 4);
        grunt.file.delete(reporter);

    } else {
        logger.info('Reporter output available on : ' + reporter);
    }
};

/**
 * Check for Coverage Reports.
 */
verifyOuptputByTarget.coverage = function (grunt) {
    var expectedCoverage = grunt.config.get('mocha.coverageTarget');

    expectedCoverage.forEach(function (reporter) {
        if (!grunt.file.read(reporter, 'utf8')) {
            grunt.fail.fatal('Empty reporter output: ' + reporter, 4);
            grunt.file.delete(reporter);

        } else {
            logger.info('Reporter output available on : ' + reporter);
        }
    });
};

configTask = function (grunt) {
    var verifyTarget = grunt.config.get('verifyTest');

    return verifyOuptputByTarget[verifyTarget](grunt);
};

module.exports = function (grunt) {
    newTask = _.partial(gruntTask, grunt);
    newTask()
        .setName(utilsTask.getPath(__filename))
        .setDescription('Verify file output mocha tests.')
        .setTaskEvironment('dev')
        .setConfigTask(configTask)
        .register();
};
