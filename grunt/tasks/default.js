'use strict';

/**
 * Empty task.
 */
module.exports = function (grunt) {
    var utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Default grunt task.')
        .setTaskEvironment('dev')
        .setTasks([])
        .register();
};
