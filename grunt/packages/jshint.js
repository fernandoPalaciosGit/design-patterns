module.exports = {
    documentation: 'http://jshint.com/docs/options',
    options: {
        jshintrc: '<%= projectPaths.gruntRuntimeConfig %>/.jshintrc',
        reporter: require('jshint-stylish')
    },
    dev: '<%= projectPaths.linterJs %>'
};
