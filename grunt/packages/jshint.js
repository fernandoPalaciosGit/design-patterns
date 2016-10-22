'use strict';

module.exports = {
    options: {
        jshintrc: '<%= gruntRuntimeConfig %>/.jshintrc',
        reporter: require('jshint-stylish'),
        ignores: ['<%= projectPaths.appAssessments.application %>/**/*.js']
    },
    dev: '<%= linterJs %>'
};
