'use strict';

module.exports = {
    options: {
        linterDocumentation: 'http://eslint.org/docs/rules',
        configFile: '<%= gruntRuntimeConfig %>/.eslintrc',
        format: require('eslint-tap')
    },
    dev: {
        src: '<%= linterJs %>'
    }
};
