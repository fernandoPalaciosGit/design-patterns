'use strict';

var _ = require('lodash'),
    path = require('path'),
    colors = require('colors'),
    _logMessage;

_logMessage = function (mask, message) {
    console.log(mask(message));
};

module.exports = {
    getPath: function (filename) {
        return path.basename(filename, '.js');
    },
    validateMochaReporter: function (list, selected) {
        var valid = _.isString(selected) && _.isArray(list) && !_.isEmpty(list) &&
            _.find(list, function (reporter) {
                return _.includes(reporter, selected);
            });

        if (!_.isString(valid)) {
            throw new Error('Has\'nt specified mocha list reporter (--reporter), ' +
                'or not valid selected target reporter (--mask) for task test.js');
        }

        return valid;
    },
    logger: {
        alert: _.partial(_logMessage, colors.red.underline),
        warning: _.partial(_logMessage, colors.yellow.underline),
        info: _.partial(_logMessage, colors.cyan.underline)
    }
};
