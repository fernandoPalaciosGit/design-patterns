'use strict';

/*
 * options.external: external modules that don't need to be constantly re-compiled
 * options.require: expose dependencies with alias
 * options.browserifyOptions.debug: Source mapping
 */
module.exports = {
    options: {
        transform: ['browserify-shim'],
        browserifyOptions: {
            debug: false
        }
    },
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
            external: '<%= browserify.vendorLibraries.test %>',
            transform: ['browserify-istanbul'],
            browserifyOptions: {
                debug: true
            }
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
            external: '<%= browserify.vendorLibraries.app %>',
            browserifyOptions: {
                debug: true
            }
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
