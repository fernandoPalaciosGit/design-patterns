module.exports = function (grunt) {
    'use strict';

    var path = require('path'),
        gruntTask = require('../GruntTask')(grunt);

    gruntTask
        .setName(path.basename(module.filename, '.js'))
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
