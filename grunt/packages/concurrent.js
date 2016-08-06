module.exports = {
    options: {
        logConcurrentOutput: false
    },
    jsLinters: {
        tasks: [
            'newer:jshint:<%= taskEnvironment %>'
        ]
    },
    jsAppCompile: {
        tasks: [
            'browserify:<%= taskEnvironment %>-app-vendors',
            'browserify:<%= taskEnvironment %>-app'
        ]
    },
    jsTestCompile: {
        tasks: [
            'browserify:<%= taskEnvironment %>-test-vendors',
            'browserify:<%= taskEnvironment %>-test'
        ]
    }
};
