'use strict';

var GruntTask,
    _ = require('lodash');

GruntTask = function () {
    this.name = 'default';
    this.description = 'There is no ' + this.name + ' task.';
    this.tasks = [];
    this.environment = 'env';
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
    register: function (grunt) {
        var callbackTask = function () {
            grunt.config.set('taskEnvironment', this.environment);
            grunt.log.writeln(this.description);
            grunt.task.run(this.tasks);
        };

        grunt.registerTask(this.name, this.description, _.bind(callbackTask, this));
    }
});

module.exports = function (grunt) {
    GruntTask.prototype.register = _.partial(GruntTask.prototype.register, grunt);

    return GruntTask;
};
