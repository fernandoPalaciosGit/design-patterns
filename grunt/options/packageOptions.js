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
            '<%= projectPaths.appOsmaniOreilly.application %>/**/*.js',
            '<%= projectPaths.appPlatzy.application %>/**/*.js'
        ],
        compileJs: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.publicDir %>/*',
                '<%= projectPaths.appPlatzy.publicDir %>/*'
            ]
        },
        projectPaths: {
            appOsmaniOreilly: {
                host: '127.0.0.1',
                port: '80',
                root: 'grunt-tasks-boilerplate',
                publicDir: 'build/osmani-oreilly',
                application: 'osmani-oreilly'
            },
            appPlatzy: {
                host: '127.0.0.1',
                port: '80',
                root: 'grunt-tasks-boilerplate',
                publicDir: 'build/platzy',
                application: 'platzy'
            }
        }
    };

module.exports = _.defaults(initialize, options);