module.exports = {
    options: {
        logConcurrentOutput: false
    },
    jsLinters: {
        tasks: [
            'newer:jshint:<%= taskEnvironment %>',
            'newer:jshint:<%= taskEnvironment %>Es6',
            'newer:jscs:<%= taskEnvironment %>',
            'newer:eslint:<%= taskEnvironment %>',
            'newer:eslint:<%= taskEnvironment %>Es6'
        ]
    },
    jsCompile: {
        tasks: ['browserify:<%= taskEnvironment %>']
    }
};
