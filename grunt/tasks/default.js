module.exports = function (grunt) {
    'use strict';

    var newTask = require('../GruntTask')(grunt);

    newTask
        .setTasks([])
        .register();
};
