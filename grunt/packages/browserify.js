'use strict';

/*
 * options.external: external modules that don't need to be constantly re-compiled
 * options.require: expose dependencies with alias
 * options.browserifyOptions.debug: Source mapping
 */
module.exports = {
    vendorLibraries: {
        app: ['lodash', 'jquery'],
        test: ['lodash', 'jquery', 'chai']
    },
    'dev-test-vendors': {
        options: {
            external: null,
            require: '<%= browserify.vendorLibraries.test %>'
        },
        src: ['.'],
        dest: '<%= projectPaths.vendors.publicDir%>/vendors.test.bundle.js'
    },
    'dev-test': {
        options: {
            browserifyOptions: {
                debug: true
            },
            external: '<%= browserify.vendorLibraries.test %>',
            transform: [
                'browserify-istanbul',
                'browserify-shim',
                ['babelify', { 'presets': ['es2015'] }]
            ],
            plugins: [
                ['minifyify', { map: 'bundle.js.map' }]
            ]
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/test/**/*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.test %>/mocha.spec.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzi.application %>/test/**/*.js',
                dest: '<%= projectPaths.appPlatzi.test %>/mocha.spec.bundle.js'
            }
        ]
    },
    'dev-app-vendors': {
        options: {
            external: null,
            require: '<%= browserify.vendorLibraries.app %>'
        },
        src: ['.'],
        dest: '<%= projectPaths.vendors.publicDir%>/vendors.app.bundle.js'
    },
    'dev-app-widget': {
        options: {
            browserifyOptions: {
                debug: true
            },
            external: '<%= browserify.vendorLibraries.app %>',
            transform: [
                'browserify-istanbul',
                ['babelify', { 'presets': ['es2015'] }]
            ],
            plugins: [
                ['minifyify', { map: 'bundle.js.map' }]
            ]
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzi.application %>/main/**/*.js',
                dest: '<%= projectPaths.appPlatzi.publicDir %>/app.bundle.js'
            }
        ]
    }
};
