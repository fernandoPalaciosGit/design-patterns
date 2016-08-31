'use strict';

/**
 * Compile JS bundles with concurrent tasks.
 * --compile=app,test,vendor
 */
module.exports = function (grunt) {
    var _ = require('lodash'),
        utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        logger = utilsTask.logger,
        newTask = gruntTask(grunt),
        compileTasks = [], selectedTask = '', configTask = _.identity;

    configTask = function (grunt) {
        try {
            compileTasks = grunt.config.get('concurrent.compileTasks');
            selectedTask = utilsTask.validateOptions(_.keys(compileTasks), grunt.option('compile'));
            this.setTasks(compileTasks[selectedTask]);

        } catch (err) {
            logger.alert(err.message);
            global.process.exit(0);
        }
    };

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Deployment bundles for Javascript.')
        .setTaskEvironment('dev')
        .setConfigTask(configTask)
        .register();
};
