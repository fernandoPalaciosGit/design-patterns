module.exports = function (grunt) {
    'use strict';

    var utilsTask = require('../UtilsTask'),
        gruntTask = require('../GruntTask'),
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Coverage reporter to unit test with mocha.')
        .setTaskEvironment('dev')
        .setTasks([
            'clean:coverage',
            'mocha:coverage'
            //'verifyOutput:coverage',
            // 'readmeCoverage' // copy coverage.html report to readme
        ])
        .register();
};
