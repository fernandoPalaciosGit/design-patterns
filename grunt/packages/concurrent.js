module.exports = {
    options: {
        logConcurrentOutput: false
    },
    jsLinters: {
        tasks: [
            'newer:jshint:<%= taskEnvironment %>'
        ]
    },
    jsCompile: {
        tasks: ['browserify:<%= taskEnvironment %>']
    }
};
