'use strict';

var getVendorOptions, getApplicationtTestOptions, getApplicationOptions;

getVendorOptions = function (externalLibs) {
    return {
        browserifyOptions: {
            debug: false
        },
        external: null,
        require: externalLibs
    };
};

getApplicationtTestOptions = function (pathTest) {
    return {
        browserifyOptions: {
            debug: true
        },
        external: '<%= browserify.vendorLibraries.test %>',
        transform: [
            ['browserify-istanbul'],
            ['browserify-shim'],
            ['babelify', { 'presets': ['es2015'] }]
        ],
        plugin: [
            ['minifyify', {
                map: './' + pathTest + '/bundle.js.map',
                output: pathTest + '/bundle.js.map'
            }]
        ]
    };
};

getApplicationOptions = function (pathApp) {
    return {
        browserifyOptions: {
            debug: true
        },
        external: '<%= browserify.vendorLibraries.app %>',
        transform: [
            ['browserify-shim'],
            ['babelify', { 'presets': ['es2015'] }]
        ],
        plugin: [
            ['minifyify', {
                map: './' + pathApp + '/bundle.js.map',
                output: pathApp + '/bundle.js.map'
            }]
        ]
    };
};

/*
 * options.external: external modules that don't need to be constantly re-compiled
 * options.require: expose dependencies with alias
 * options.browserifyOptions.debug: Source mapping
 */
module.exports = {
    /* VENDOR LIBRARIES */
    vendorLibraries: {
        app: ['lodash', 'jquery'],
        test: ['lodash', 'jquery', 'chai']
    },
    'dev-test-vendors': {
        options: getVendorOptions('<%= browserify.vendorLibraries.test %>'),
        src: ['.'],
        dest: '<%= projectPaths.vendors.publicDir%>/test.bundle.js'
    },
    'dev-app-vendors': {
        options: getVendorOptions('<%= browserify.vendorLibraries.app %>'),
        src: ['.'],
        dest: '<%= projectPaths.vendors.publicDir%>/app.bundle.js'
    },

    /* APPLICATIONS TESTING */
    'dev-test-platzi': {
        options: getApplicationtTestOptions('<%= projectPaths.appPlatzi.test %>'),
        src: [
            '<%= projectPaths.appPlatzi.application %>/test/**/*.js',
            '!<%= projectPaths.appPlatzi.application %>/test/index.js'
        ],
        dest: '<%= projectPaths.appPlatzi.test %>/mocha.spec.bundle.js'
    },
    'dev-test-osmanioreilly': {
        options: getApplicationtTestOptions('<%= projectPaths.appOsmaniOreilly.test %>'),
        src: [
            '<%= projectPaths.appOsmaniOreilly.application %>/test/**/*.js',
            '!<%= projectPaths.appOsmaniOreilly.application %>/test/index.js'
        ],
        dest: '<%= projectPaths.appOsmaniOreilly.test %>/mocha.spec.bundle.js'
    },

    /* APPLICATIONS */
    'dev-app-widget-platzi': {
        options: getApplicationOptions('<%= projectPaths.appPlatzi.publicDir %>'),
        src: [
            '<%= projectPaths.appPlatzi.application %>/main/**/*.js',
            '!<%= projectPaths.appPlatzi.application %>/main/index.js'
        ],
        dest: '<%= projectPaths.appPlatzi.publicDir %>/app.bundle.js'
    },
    'dev-app-widget-osmanioreilly': {
        options: getApplicationOptions('<%= projectPaths.appOsmaniOreilly.publicDir %>'),
        src: [
            '<%= projectPaths.appOsmaniOreilly.application %>/main/**/*.js',
            '!<%= projectPaths.appOsmaniOreilly.application %>/main/index.js'
        ],
        dest: '<%= projectPaths.appOsmaniOreilly.publicDir %>/app.bundle.js'
    }
};
