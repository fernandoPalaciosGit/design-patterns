module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash'),
        utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = _.partial(gruntTask, grunt);

    newTask()
        .setName(utilsTask.getPath())
        .setDescription('Unit test for js modules with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'mocha:dev --reporter=spec',
            'verifyOutput --force',
            'clean:mocha'
        ])
        .register();
};
