'use strict';

var verifyOutput, gruntTask,
    path = require('path');

verifyOutput = function (grunt) {
    var expected = ['spec'/*, 'xunit'*/];

    expected.forEach(function (reporter) {
        var output = 'test/' + reporter + '.out';

        // simply check if the file is non-empty since verifying if the output is
        // correct based on the spec is kind of hard due to changing test running
        // times and different ways to report this time in reporters.
        if (!grunt.file.read(output, 'utf8')) {
            grunt.fatal('Empty reporter output: ' + reporter);
            grunt.file.delete(output);

        } else {
            grunt.log.ok('Reporter output non-empty for: %s', reporter);
        }
    });
};

module.exports = function (grunt) {
    gruntTask = require('../GruntTask')(grunt);
    gruntTask.setName(path.basename(module.filename, '.js'))
        .setDescription('Verify file output mocha tests.')
        .setTasks(verifyOutput)
        .register();
};