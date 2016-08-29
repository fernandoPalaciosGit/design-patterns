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
    validateOptions: function (list, selected) {
        var valid = _.isString(selected) && _.isArray(list) && !_.isEmpty(list) &&
            _.find(list, function (option) {
                return _.includes(option, selected);
            });

        if (!_.isString(valid)) {
            throw new Error('Not valid selected option target (--mask, --reporter, --compile).');
        }

        return valid;
    },
    getPlatformCommands: function () {
        var isWindowsOS = /^win/.test(process.platform),
            windowsOS = './commands/windows',
            unixOS = './commands/unix';

        return isWindowsOS ? require(windowsOS) : require(unixOS);
    },
    logger: {
        alert: _.partial(_logMessage, colors.red.underline),
        warning: _.partial(_logMessage, colors.yellow.underline),
        info: _.partial(_logMessage, colors.cyan.underline)
    }
};
