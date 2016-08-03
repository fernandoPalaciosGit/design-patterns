'use strict';

var configuration, _ = require('lodash');

configuration = {
    dev: {
        src: ['../../platzy/test/**/*.html'],
        dest: '../../mocha-output/spec.out',
        options: {
            reporter: 'Spec'
        }
    },
    verifyOutput: function (grunt) {
        var expected = ['spec', 'xunit'];

        expected.forEach(function (reporter) {
            var output = '../../mocha-output/' + reporter + '.out';

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
    }
};

module.exports = function (grunt) {
    configuration.verifyOutput = _.partial(configuration.verifyOutput, grunt);

    return configuration;
};