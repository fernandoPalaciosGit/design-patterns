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
            '<%= bundleJS.dirDev %>'
        ],
        bundleJS: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.application %>/**/*.js',
                '<%= projectPaths.appPlatzy.application %>/**/*.js'
            ]
        },
        cleanBundleJs: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.publicDir %>/*',
                '<%= projectPaths.appOsmaniOreilly.test %>/*',
                '<%= projectPaths.appPlatzy.publicDir %>/*',
                '<%= projectPaths.appPlatzy.test %>/*'
            ]
        },
        compileJs: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.publicDir %>/*',
                '<%= projectPaths.appOsmaniOreilly.test %>/*',
                '<%= projectPaths.appPlatzy.publicDir %>/*',
                '<%= projectPaths.appPlatzy.test %>/*',
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
            appPlatzy: {
                host: '127.0.0.1',
                port: '80',
                root: 'grunt-tasks-boilerplate',
                publicDir: 'build/platzy',
                test: 'build/mocha/platzy',
                application: 'platzy'
            },
            vendors: {
                publicDir: 'build/vendors'
            }
        }
    };

module.exports = _.defaults(initialize, options);