module.exports = function (grunt) {
    'use strict';

    var utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('JavaScript code coverage.')
        .setTaskEvironment('dev')
        .setTasks([
            'clean:coverage',
            'instrument',
            'reloadTasks',
            'storeCoverage',
            'makeReport'
        ])
        .register();
};
