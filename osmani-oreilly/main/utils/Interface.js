'use strict';

var Interface,
    _ = require('lodash');

Interface = function (options) {
    this.name = options.name;
    this.ensureDecoratorMethods(options.methodsImplemented);
    this.ensureDecoratorInterface(options.interfaceImplemented);
};

_.assign(Interface.prototype, {
    ensureDecoratorMethods: function (methods) {
        var hasInvalidMethods = !_.isArray(methods) && _.some(methods, function (method) {
                return !_.isString(method);
            });

        if (hasInvalidMethods) {
            throw new Error('Interface constructor expects method names to be passed in as a string.');

        } else {
            this.methods = methods;
        }
    },

    ensureDecoratorInterface: function (interfaceImplemented) {
        var invalidMethod = [];

        if (!_.isUndefined(this.methods) && !_.isEmpty(this.methods)) {
            invalidMethod = _.find(this.methods, _.bind(function (method) {
                return !_.includes(interfaceImplemented, method) && !_.isFunction(interfaceImplemented[method]);
            }, this));

            if (!_.isEmpty(invalidMethod)) {
                throw new Error('interface does not implement the module ' + this.name  +
                    'Method \'' + invalidMethod + '\' was not found.');
            }

        } else {
            throw new Error('Interface has not implemented method list.');
        }
    }
});

module.exports = function (options) {
    return new Interface(options || {});
};
