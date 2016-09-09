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
            '!osmani-oreilly/main/patterns/happy-thoughts.js',
            '!osmani-oreilly/main/patterns/creational.js',
            '!osmani-oreilly/main/patterns/factory.js',
            '!osmani-oreilly/test/patterns/factory.js',
            '!osmani-oreilly/main/patterns/mediator.js',
            '!osmani-oreilly/main/patterns/mixin.js',
            '!osmani-oreilly/main/patterns/module.js',
            '!osmani-oreilly/main/patterns/prototype.js',
            '!osmani-oreilly/main/patterns/revealing-module.js',
            '!osmani-oreilly/main/patterns/singleton.js'
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
            protocol: process.env.APACHE_PROTOCOL || 'http',
            host: process.env.APACHE_HOST || 'localhost',
            port: process.env.APACHE_PORT || '80',
            root: 'design-patterns',
            appOsmaniOreilly: {
                publicDir: 'build/osmani-oreilly',
                test: 'build/mocha/osmani-oreilly',
                application: 'osmani-oreilly'
            },
            appPlatzi: {
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
