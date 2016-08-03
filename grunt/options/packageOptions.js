'use strict';

var _ = require('lodash'),
    initialize = {
        config: {
            src: 'grunt/packages/*.js'
        }
    },
    options = {
        packageJson: '<% grunt.file.readJSON(\'package.json\') %>',
        gruntRuntimeConfig: 'grunt/runtime-config',
        linterJs: [
            'Gruntfile.js',
            'grunt/**/*.js',
            '<%= projectPaths.development.application %>/**/*.js',
            '!<%= projectPaths.development.application %>/**/*.es6.js'
        ],
        compileJs: {
            dirDev: '<%= projectPaths.development.publicDir %>/*'
        },
        projectPaths: {
            development: {
                host: '127.0.0.1',
                port: '80',
                root: 'grunt-tasks-boilerplate',
                publicDir: 'build',
                application: 'application'
            }
        }
    };

module.exports = _.defaults(initialize, options);