module.exports = {
    documentation: 'http://eslint.org/docs/rules',
    options: {
        configFile: '<%= projectPaths.gruntRuntimeConfig %>/.eslintrc',
        format: require('eslint-tap')
    },
    dev: {
        src: '<%= projectPaths.linterJs %>'
    }
};
