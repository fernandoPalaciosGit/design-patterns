'use strict';

var GruntTask,
    _ = require('lodash');

/**
 * Create grunt project task
 * @constructor
 * @param {Object} options - Object with initialized Constructor properties
 * @property {string} name - The title of task.
 * @property {string} description - What makes the task.
 * @property {Array|Function} tasks - TaskList will be run or specified callback task.
 * @property {string} environment - The author of the book.
 */
GruntTask = function (options) {
    this.name = options.name || 'default';
    this.description = options.description || 'There is no ' + this.name + ' task.';
    this.tasks = options.tasks;
    this.environment = this.setEnvironment(options.environment);
};

_.assign(GruntTask.prototype, {
    setName: function (n) {
        this.name = n;

        return this;
    },
    setDescription: function (desc) {
        this.description = desc;

        return this;
    },
    setTasks: function (plugin) {
        this.tasks = plugin;

        return this;
    },
    setTaskEvironment: function (env) {
        this.environment = env;

        return this;
    },
    setEnvironment: function (env) {
        var valid = ['dev', 'dist', 'qa'],
            defaultEnvironment = valid[0];

        return _.includes(valid, env) ? env : defaultEnvironment;
    },
    callbackTask: function (grunt) {
        if (_.isFunction(this.tasks)) {
            this.tasks(grunt);

        } else if (_.isArray(this.tasks)) {
            grunt.task.run(this.tasks);

        } else {
            grunt.fail.fatal('Not valid task from object type: ' +
                Object.prototype.toString.call(this.tasks), 3)
        }
    },
    register: function (grunt) {
        grunt.registerTask(this.name, this.description, _.partial(function (grunt) {
            grunt.config.set('taskEnvironment', this.environment);
            grunt.log.writeln(this.description);
            this.callbackTask(grunt);
        }.bind(this), grunt));
    }
});

module.exports = function (grunt, opt) {
    GruntTask.prototype.register = _.partial(GruntTask.prototype.register, grunt);

    return new GruntTask(opt || {});
};
