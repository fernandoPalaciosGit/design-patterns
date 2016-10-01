'use strict';

module.exports = {
    options: {
        configFile: '<%= gruntRuntimeConfig %>/.eslintrc',
        format: require('eslint-tap')
    },
    dev: {
        src: '<%= linterJs %>'
    }
};
