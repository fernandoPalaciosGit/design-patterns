module.exports = function (grunt) {
    'use strict';

    var utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Deployment bundles for Javascript.')
        .setTaskEvironment('dev')
        .setTasks([
            'clean:dev-js',
            'concurrent:jsLinters',
            'concurrent:jsAppCompile',
            'concurrent:jsTestCompile'
        ])
        .register();
};
