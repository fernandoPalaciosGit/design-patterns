'use strict';

var logger, printer,
    _ = require('lodash'),
    validation = require('./Validation');

logger = function () {
    var _accumulateLog = '', _printProperty, _getOutputAndResetLog;

    _printProperty = function (printer, key) {
        return printer += _.join(['-', key, ':', this[key], '\n'], ' ');
    };

    _getOutputAndResetLog = function (log) {
        _accumulateLog = '';

        return log;
    };

    return {
        add: function (log) {
            _accumulateLog += (log + '\n');
        },
        printPropertyList: function (context) {
            var log = _.reduce(Object.getOwnPropertyNames(context), _.bind(_printProperty, context), _accumulateLog);

            return _getOutputAndResetLog(log);
        },
        showLog: function () {
            return _getOutputAndResetLog(_accumulateLog);
        }
    };
};

printer = function () {
    return {
        joinFields: function () {
            return !validation.hasEmptyFields(arguments) ? _.join(arguments, '<-->') : null;
        }
    };
};

module.exports.getLogger = logger();
module.exports.getPrinter = printer();