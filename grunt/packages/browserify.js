'use strict';

/*
 * options.external: external modules that don't need to be constantly re-compiled
 * options.require: expose dependencies with alias
 * options.browserifyOptions.debug: Source mapping
 */
module.exports = {
    setBrowserifyOptions: function (options) {
        return require('util')._extend({
            debug: false,
            transform: ['browserify-shim']
        }, options);
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
            browserifyOptions: '<% browserify.setBrowserifyOptions({debug: true}) %>',
            external: '<%= browserify.vendorLibraries.test %>'
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/test/**/mocha.spec.*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.test %>/mocha.spec.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzi.application %>/test/**/mocha.spec.*.js',
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
            browserifyOptions: '<% browserify.setBrowserifyOptions({debug: true}) %>',
            external: '<%= browserify.vendorLibraries.app %>'
        },
        files: [
            {
                src: '<%= projectPaths.appOsmaniOreilly.application %>/main/**/app.widget.*.js',
                dest: '<%= projectPaths.appOsmaniOreilly.publicDir %>/app.widget.bundle.js'
            },
            {
                src: '<%= projectPaths.appPlatzi.application %>/main/**/app.widget.*.js',
                dest: '<%= projectPaths.appPlatzi.publicDir %>/app.widget.bundle.js'
            }
        ]
    }
};
