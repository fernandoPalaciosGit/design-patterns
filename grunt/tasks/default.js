module.exports = function (grunt) {
    'use strict';

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
