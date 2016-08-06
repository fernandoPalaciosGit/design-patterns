'use strict';

var verifyOutput, _ = require('lodash');

verifyOutput = function (grunt) {
    var expected = ['spec', 'xunit'];

    expected.forEach(function (reporter) {
        var output = 'mocha-test/' + reporter + '.out';

        // simply check if the file is non-empty since verifying if the output is
        // correct based on the spec is kind of hard due to changing test running
        // times and different ways to report this time in reporters.
        if (!grunt.file.read(output, 'utf8')) {
            grunt.fatal('Empty reporter output: ' + reporter);
        }

        // Clean-up
        grunt.file.delete(output);
        grunt.log.ok('Reporter output non-empty for: %s', reporter);
    });
};

module.exports = function (grunt) {
    return _.partial(verifyOutput, grunt);
};