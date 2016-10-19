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
        outputDisc: require('path').resolve('.') + '/disc',
        linterJs: [
            'Gruntfile.js',
            'grunt/**/*.js',
            '<%= bundleJS.dirDev %>'
        ],
        linterYaml: [
            '.travis.yml',
            'grunt/**/.*yml',
            '<%= projectPaths.appOsmaniOreilly.application %>/**/*.yml',
            '<%= projectPaths.appPlatzi.application %>/**/*.yml',
            '<%= projectPaths.appAssessments.application %>/**/*.yml'
        ],
        linterJson: [
            'package.json',
            'bower.json',
            'grunt/**/*.json',
            'grunt/**/.*rc',
            '<%= projectPaths.appOsmaniOreilly.application %>/**/*.json',
            '<%= projectPaths.appPlatzi.application %>/**/*.json',
            '<%= projectPaths.appAssessments.application %>/**/*.json'
        ],
        bundleJS: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.application %>/**/*.js',
                '<%= projectPaths.appPlatzi.application %>/**/*.js',
                '!<%= projectPaths.appAssessments.application %>/**/*.js'
            ]
        },
        cleanBundleJs: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.publicDir %>/*',
                '<%= projectPaths.appOsmaniOreilly.test %>/*',
                '<%= projectPaths.appPlatzi.publicDir %>/*',
                '<%= projectPaths.appPlatzi.test %>/*',
                '<%= projectPaths.appAssessments.publicDir %>/*',
                '<%= projectPaths.appAssessments.test %>/*'
            ]
        },
        compileJs: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.publicDir %>/*',
                '<%= projectPaths.appOsmaniOreilly.test %>/*',
                '<%= projectPaths.appPlatzi.publicDir %>/*',
                '<%= projectPaths.appPlatzi.test %>/*',
                '<%= projectPaths.appAssessments.publicDir %>/*',
                '<%= projectPaths.appAssessments.test %>/*',
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
                publicDir: 'build/osmani-oreilly/main',
                test: 'build/osmani-oreilly/test',
                application: 'osmani-oreilly'
            },
            appPlatzi: {
                publicDir: 'build/platzi/main',
                test: 'build/platzi/test',
                application: 'platzi'
            },
            appAssessments: {
                publicDir: 'build/assessments/main',
                test: 'build/assessments/test',
                application: 'assessments'
            },
            vendors: {
                publicDir: 'build/vendors'
            }
        }
    };

module.exports = _.defaults(initialize, options);
