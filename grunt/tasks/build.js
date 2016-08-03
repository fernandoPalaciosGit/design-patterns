module.exports = function (grunt) {
    'use strict';

    var path = require('path'),
        GruntTask = require('../GruntTask')(grunt),
        task = new GruntTask();

    task.setName(path.basename(module.filename, '.js'))
        .setDescription('Deployment Javascript.')
        .setTaskEvironment('dev')
        .setTasks([
            'clean:devJs'
            /*,
            'concurrent:validator',
            'concurrent:jsLinters',
            'concurrent:jsCompile'*/
        ])
        .register();
};
