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
        environmentTasks: ['dev', 'dist', 'qa'],
        linterJs: [
            'Gruntfile.js',
            'grunt/**/*.js',
            '<%= bundleJS.dirDev %>',
            '!osmani-oreilly/main/patterns/app.module.happy-thoughts.js',
            '!osmani-oreilly/main/patterns/app.module.creational.js',
            '!osmani-oreilly/main/patterns/app.module.factory.js',
            '!osmani-oreilly/main/patterns/app.module.mediator.js',
            '!osmani-oreilly/main/patterns/app.module.mixin.js',
            '!osmani-oreilly/main/patterns/app.module.module.js',
            '!osmani-oreilly/main/patterns/app.module.prototype.js',
            '!osmani-oreilly/main/patterns/app.module.revealing-module.js',
            '!osmani-oreilly/main/patterns/app.module.singleton.js'
        ],
        linterYaml: [
            '.travis.yml',
            'grunt/**/.*yml',
            '<%= projectPaths.appOsmaniOreilly.application %>/**/*.yml',
            '<%= projectPaths.appPlatzi.application %>/**/*.yml'
        ],
        linterJson: [
            'package.json',
            'bower.json',
            'grunt/**/*.json',
            'grunt/**/.*rc',
            '<%= projectPaths.appOsmaniOreilly.application %>/**/*.json',
            '<%= projectPaths.appPlatzi.application %>/**/*.json'
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
            git: '.git/hooks',
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
