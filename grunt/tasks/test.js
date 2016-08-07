module.exports = function (grunt) {
    'use strict';

    var path = require('path'),
        gruntTask = require('../GruntTask')(grunt);

    gruntTask
        .setName(path.basename(module.filename, '.js'))
        .setDescription('Unit test for js modules with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'mocha:dev',
            'verifyOutput'
        ])
        .register();
};
