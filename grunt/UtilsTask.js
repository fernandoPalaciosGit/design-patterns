var _ = require('lodash'),
    path = require('path');

module.exports = {
    getPath: function (filename) {
        return path.basename(filename, '.js')
    },
    getMochaReporter: function (grunt, reporter) {
        var validList = grunt.config.get('mochaReporter'),
            selectedReporter = reporter || grunt.option('reporter'),
            defaultReporter = validList[0];

        if (_.isString(selectedReporter)) {
            return _.find(validList, function (reporter) {
                    return _.includes(reporter, selectedReporter);
                }) || defaultReporter;

        } else {
            grunt.fail.fatal('Has\'nt specified mocha reporter for unit test.', 3);
        }
    }
};