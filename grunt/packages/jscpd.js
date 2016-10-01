'use strict';

module.exports = function (grunt) {
    const globJs = '**/*.js';
    var projectPaths = grunt.config.get('projectPaths'),
        _ = require('lodash'),
        module = {
            options: {
                'min-lines': 5,
                'min-tokens': 70,
                threshold: 1
            }
        };

    // grunt argument is not yet initialized at this point (load-grunt-configs), could not retrieve grunt.config.get()
    projectPaths = !_.isEmpty(projectPaths) ? projectPaths : require('./../options/packageOptions').projectPaths;

    return _.chain(projectPaths)
        .filter(function (path) {
            return _.isString(path.application) && !_.isEmpty(path.application);
        })
        .reduce(function (module, path) {
            module[path.application] = {
                path: path.application,
                files: globJs
            };

            return module;
        }, module).value();
};
