'use strict';

/**
 * Export Istanbul coverage report from mocha test.
 */
module.exports = function (grunt) {
    var configTask,
        utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = gruntTask(grunt);

    configTask = function (grunt) {
        grunt.config.set('verifyTest', 'coverage');
    };

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Coverage reporter to unit test with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'clean:coverage',
            'mocha:coverage',
            'verifyOutput:force'
        ])
        .setConfigTask(configTask)
        .register();
};
