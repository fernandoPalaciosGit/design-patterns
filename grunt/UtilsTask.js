'use strict';

var _ = require('lodash'),
    path = require('path');

module.exports = {
    getPath: function (filename) {
        return path.basename(filename, '.js');
    },
    getMochaReporter: function (list, selected) {
        if (_.isString(selected) && _.isArray(list) && !_.isEmpty(list)) {
            var defaultReporter = list[0];

            return _.find(list, function (reporter) {
                    return _.includes(reporter, selected);
                }) || defaultReporter;

        } else {
            console.error('Has\'nt specified mocha list reporter, ' +
                'or selected target reporter for unit test.');
            global.process.exit(0);
        }
    }
};