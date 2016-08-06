module.exports = function (grunt) {
    'use strict';

    var path = require('path'),
        GruntTask = require('../GruntTask')(grunt),
        task = new GruntTask();

    task.setName(path.basename(module.filename, '.js'))
        .setDescription('Unit test for biuld js modules with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'mocha:dev',
            'verifyOutput'
        ])
        .register();
};
