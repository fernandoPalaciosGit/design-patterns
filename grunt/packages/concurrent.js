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
            'newer:browserify:<%= taskEnvironment %>-app-vendors',
            'newer:browserify:<%= taskEnvironment %>-app'
        ]
    },
    jsTestCompile: {
        tasks: [
            'newer:browserify:<%= taskEnvironment %>-test-vendors',
            'newer:browserify:<%= taskEnvironment %>-test'
        ]
    }
};
