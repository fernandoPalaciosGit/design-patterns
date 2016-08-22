module.exports = {
    documentation: 'http://eslint.org/docs/rules',
    options: {
        configFile: '<%= gruntRuntimeConfig %>/.eslintrc',
        format: require('eslint-tap')
    },
    dev: {
        src: '<%= linterJs %>'
    }
};
