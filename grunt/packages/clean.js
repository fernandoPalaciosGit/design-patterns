'use strict';

module.exports = {
    'dev-js': '<%= cleanBundleJs.dirDev %>',
    'mocha': '<%= mocha.dev.dest %>',
    'coverage': '<%= mocha.coverageReporter %>',
    'disc': '<%= outputDisc %>'
};
