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
        try {
            if (_.isString(selected) && _.isArray(list) && !_.isEmpty(list)) {
                return _.find(list, function (reporter) {
                        return _.includes(reporter, selected);
                    }) || list[0];

            } else {
                throw new Error('Has\'nt specified mocha list reporter, ' +
                    'or selected target reporter for unit test.');
            }

        } catch (err) {
            this.logger.alert(err.message);
            global.process.exit(0);
        }
    },
    logger: {
        alert: _.partial(_logMessage, colors.red.underline),
        warning: _.partial(_logMessage, colors.yellow.underline),
        info: _.partial(_logMessage, colors.cyan.underline)
    }
};
