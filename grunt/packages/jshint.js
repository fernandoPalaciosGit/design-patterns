'use strict';

module.exports = {
    linterDocumentation: 'http://jshint.com/docs/options',
    options: {
        jshintrc: '<%= gruntRuntimeConfig %>/.jshintrc',
        reporter: require('jshint-stylish')
    },
    dev: '<%= linterJs %>'
};
