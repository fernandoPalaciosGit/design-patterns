'use strict';

var GruntTask,
    logger = require('./UtilsTask').logger,
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
    this.tasks = options.tasks || [];
    this.environment = options.environment;
    this.runConfig = options.runConfig || _.identity;
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
    setTasks: function (tasks) {
        this.tasks = tasks;

        return this;
    },
    setTaskEvironment: function (env) {
        this.environment = env;

        return this;
    },
    setConfigTask: function (callbackConfig) {
        this.runConfig = callbackConfig;

        return this;
    },
    verifyTask: function (grunt) {
        if (_.isNull(this.name)) {
            throw new Error('Could not initialize grunt task without \'name\' property.');

        } else if (!_.isArray(this.tasks)) {
            throw new Error('Not valid task from object type: ' +
                Object.prototype.toString.call(this.tasks) + ' for task ' + this.name + '.js');

        } else if (!_.includes(grunt.config.get('environmentTasks'), this.environment)) {
            throw new Error('Not valid environment identifier ' +
                this.environment + ' for task ' + this.name + '.js');

        } else if (!_.isFunction(this.runConfig)) {
            throw new Error('this.runConfig callback for task configuration is not a function closure, ' +
                'instead get: ' + this.runConfig);
        }
    },
    runTask: function (grunt) {
        logger.info(this.description);
        grunt.config.set('taskEnvironment', this.environment);
        this.runConfig(grunt);
        grunt.task.run(this.tasks);
    },
    register: function (grunt) {
        try {
            this.verifyTask(grunt);

        } catch (error) {
            logger.alert(error.message);
            global.process.exit(0);

        } finally {
            grunt.registerTask(this.name, this.description, _.bindKey(this, 'runTask', grunt));
        }
    }
});

module.exports = function (grunt, opt) {
    GruntTask.prototype.register = _.partial(GruntTask.prototype.register, grunt);

    return new GruntTask(opt || {});
};
