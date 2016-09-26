'use strict';

module.exports = {
    options: {
        logConcurrentOutput: false
    },
    compileTasks: {
        // --compile=app
        app: [
            'clean:dev-js',
            'concurrent:jsLinters',
            'concurrent:jsCopyPaste',
            'concurrent:jsVendorsCompile',
            'concurrent:jsAppCompile',
            'concurrent:jsTestCompile'
        ],
        // --compile=test
        test: [
            'clean:dev-js',
            'concurrent:jsAppCompile',
            'concurrent:jsTestCompile'
        ],
        // --compile=vendor
        vendor: [
            'clean:dev-js',
            'concurrent:jsVendorsCompile'
        ]
    },
    jsLinters: {
        tasks: [
            'yaml_validator:<%= taskEnvironment %>',
            'jsonlint:<%= taskEnvironment %>',
            'jshint:<%= taskEnvironment %>',
            'jscs:<%= taskEnvironment %>',
            'eslint:<%= taskEnvironment %>'
        ]
    },
    jsCopyPaste: {
        tasks: [
            'jscpd:osmani-oreilly',
            'jscpd:platzi'
        ]
    },
    jsVendorsCompile: {
        tasks: [
            'newer:browserify:<%= taskEnvironment %>-app-vendors',
            'newer:browserify:<%= taskEnvironment %>-test-vendors'
        ]
    },
    jsAppCompile: {
        tasks: [
            'newer:browserify:<%= taskEnvironment %>-app-widget-platzi',
            'newer:browserify:<%= taskEnvironment %>-app-widget-osmanioreilly'
        ]
    },
    jsTestCompile: {
        tasks: [
            'newer:browserify:<%= taskEnvironment %>-test-platzi',
            'newer:browserify:<%= taskEnvironment %>-test-osmanioreilly'
        ]
    }
};
