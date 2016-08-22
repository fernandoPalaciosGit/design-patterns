module.exports = {
    options: {
        logConcurrentOutput: false
    },
    jsLinters: {
        tasks: [
            'yaml_validator:<%= taskEnvironment %>',
            'jsonlint:<%= taskEnvironment %>',
            'jshint:<%= taskEnvironment %>'
            //'jscs:<%= taskEnvironment %>'
            //'eslint:<%= taskEnvironment %>'
        ]
    },
    jsAppCompile: {
        tasks: [
            'newer:browserify:<%= taskEnvironment %>-app-vendors',
            'newer:browserify:<%= taskEnvironment %>-app-widget'
        ]
    },
    jsTestCompile: {
        tasks: [
            'newer:browserify:<%= taskEnvironment %>-test-vendors',
            'newer:browserify:<%= taskEnvironment %>-test'
        ]
    }
};
