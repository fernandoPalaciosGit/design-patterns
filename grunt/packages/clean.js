'use strict';

module.exports = {
    'vendors-js': '<%= projectPaths.vendors.publicDir %>',
    'dev-js': '<%= cleanBundleJs.dirDev %>',
    'mocha': '<%= mocha.dev.dest %>',
    'coverage': '<%= outputCoverage %>',
    'disc': '<%= outputDisc %>'
};
