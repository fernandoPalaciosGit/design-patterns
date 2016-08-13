module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash'),
        utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = _.partial(gruntTask, grunt);

    newTask()
        .setName(utilsTask.getPath(__filename))
        .setDescription('Default grunt task.')
        .setTaskEvironment('dev')
        .setTasks([])
        .register();
};
