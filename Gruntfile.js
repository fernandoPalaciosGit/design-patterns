'use strict';

module.exports = function (grunt) {
    var loadTimer = require('time-grunt'),
        initTasks = require('load-grunt-tasks'),
        taskOptions = require('./grunt/options/taskOptions'),
        packageOptions = require('./grunt/options/packageOptions'),
        loadPackages = require('load-grunt-configs')(grunt, packageOptions);

    loadTimer(grunt);
    initTasks(grunt, taskOptions);
    grunt.initConfig(loadPackages);
    grunt.loadTasks('./grunt/tasks');
};
