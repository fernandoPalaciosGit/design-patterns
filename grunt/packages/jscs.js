'use strict';

module.exports = {
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
