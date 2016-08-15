'use strict';

var Interface,
    _ = require('lodash');

Interface = function (options) {
    this.name = options.name;
    this.setMethods(options.methods);
};

_.assign(Interface, {
    setMethods: function (methods) {
        var hasInvalidMethods = !_.isArray(methods) && _.some(methods, function (method) {
                return !_.isString(method);
            });

        if (hasInvalidMethods) {
            throw new Error('Interface constructor expects method names to be passed in as a string.');

        } else {
            this.methods = methods;
        }
    },

    ensureImplements: function (instance) {
        if (!_.isUndefined(this.methods) && !_.isEmpty(this.methods)) {
            var invalidMethod = _.find(Object.getOwnPropertyNames(instance.prototype), _.bind(function (method) {
                return !_.includes(this.methods, method) && !_.isFunction(instance[method]);
            }, this));

            if (!_.isEmpty(invalidMethod)) {
                throw new Error('interface does not implement the ' + this.name + ' module.' +
                    'Method ' + invalidMethod + ' was not found.');
            }

        } else {
            throw new Error('Interface has not implemented method list.');
        }
    }
});

module.exports = function (options) {
    return new Interface(options || {});
};