'use strict';

var GruntTask,
    _ = require('lodash');

/**
 * Create grunt project task
 * @constructor
 * @param {Object} options - Object with initialized Constructor properties
 * @property {string} name - The title of task.
 * @property {string} description - What makes the task.
 * @property {(Array|Function|null)} - TaskList will be run or specified callback task.
 * @property {string} environment - The author of the book.
 */
GruntTask = function (options) {
    this.name = options.name || null;
    this.description = options.description || 'Unknown definition task.';
    this.tasks = options.tasks || null;
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
    verifyTask: function (grunt) {
        try {
            if (_.isNull(this.name)) {
                throw new Error('Could not initialize grunt task without \'name\' property.');

            } else if (_.isNull(this.tasks) || (!_.isFunction(this.tasks) & !_.isArray(this.tasks))) {
                throw new Error('Not valid task from object type: ' +
                    Object.prototype.toString.call(this.tasks));
            }
        } catch (error) {
            grunt.fail.fatal(error.message, 3);
        }
    },
    callbackTask: function (grunt) {
        grunt.log.writeln(this.description);

        if (_.isFunction(this.tasks)) {
            this.tasks(grunt);

        } else if (_.isArray(this.tasks)) {
            grunt.task.run(this.tasks);
        }
    },
    register: function (grunt) {
        this.verifyTask(grunt);
        grunt.registerTask(this.name, this.description, _.partial(function (grunt) {
            grunt.config.set('taskEnvironment', this.environment);
            this.callbackTask(grunt);
        }.bind(this), grunt));
    }
});

module.exports = function (grunt, opt) {
    GruntTask.prototype.register = _.partial(GruntTask.prototype.register, grunt);

    return new GruntTask(opt || {});
};
