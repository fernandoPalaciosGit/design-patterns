'use strict';

var logger,
    _ = require('lodash');

logger = function () {
    var _accumulateLog = '', _printProperty;

    _printProperty = function (printer, key) {
        return printer += _.join(['-', key, ':', this[key], '\n'], ' ');
    };

    return {
        add: function (log) {
            _accumulateLog += (log + '\n');
        },
        getOutputAndResetLog: function (log) {
            _accumulateLog = '';

            return log;
        },
        // Outputs
        printPropertyList: function (context) {
            var log = _.reduce(Object.getOwnPropertyNames(context), _.bind(_printProperty, context), _accumulateLog);

            return this.getOutputAndResetLog(log);
        },
        showLog: function () {
            return this.getOutputAndResetLog(_accumulateLog);
        }
    };
};

module.exports.getLogger = logger();