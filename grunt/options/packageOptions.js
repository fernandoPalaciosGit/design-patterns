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
        mochaListReporter: [
            'test/spec.out',
            'test/html.out',
            'test/xunit.out'
        ],
        mochaMaskReporter: ['spec', 'dot', 'nyan', 'TAP', 'landing', 'list',
            'progress', 'JSON', 'JSON stream', 'min', 'doc'],
        coverageReporter: 'test/coverage',
        linterJs: [
            'Gruntfile.js',
            'grunt/**/*.js',
            '<%= bundleJS.dirDev %>'
        ],
        bundleJS: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.application %>/**/*.js',
                '<%= projectPaths.appPlatzi.application %>/**/*.js'
            ]
        },
        cleanBundleJs: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.publicDir %>/*',
                '<%= projectPaths.appOsmaniOreilly.test %>/*',
                '<%= projectPaths.appPlatzi.publicDir %>/*',
                '<%= projectPaths.appPlatzi.test %>/*'
            ]
        },
        compileJs: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.publicDir %>/*',
                '<%= projectPaths.appOsmaniOreilly.test %>/*',
                '<%= projectPaths.appPlatzi.publicDir %>/*',
                '<%= projectPaths.appPlatzi.test %>/*',
                '<%= projectPaths.vendors.publicDir %>/*'
            ]
        },
        projectPaths: {
            appOsmaniOreilly: {
                host: '127.0.0.1',
                port: '80',
                root: 'grunt-tasks-boilerplate',
                publicDir: 'build/osmani-oreilly',
                test: 'build/mocha/osmani-oreilly',
                application: 'osmani-oreilly'
            },
            appPlatzi: {
                host: '127.0.0.1',
                port: '80',
                root: 'grunt-tasks-boilerplate',
                publicDir: 'build/platzi',
                test: 'build/mocha/platzi',
                application: 'platzi'
            },
            vendors: {
                publicDir: 'build/vendors'
            }
        }
    };

module.exports = _.defaults(initialize, options);