'use strict';

module.exports = {
    linterDocumentation: 'http://jscs.info/rules',
    options: {
        config: '<%= gruntRuntimeConfig %>/.jscsrc',
        verbose: false,
        fix: false
    },
    dev: {
        files: {
            src: '<%= linterJs %>'
        }
    }
};
