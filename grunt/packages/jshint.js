'use strict';

module.exports = {
    options: {
        jshintrc: '<%= gruntRuntimeConfig %>/.jshintrc',
        reporter: require('jshint-stylish')
    },
    dev: '<%= linterJs %>'
};
