module.exports = function () {
    'use strict';

    var _ = require('lodash'),
        shellCommands = require('../UtilsTask').getPlatformCommands();

    return _.assign({
        options: {
            stdout: true,
            stderr: true,
            failOnError: true,
            execOptions: {
                maxBuffer: Infinity
            }
        }
    }, shellCommands);
};