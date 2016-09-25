'use strict';

module.exports = {
    options: {
        'min-lines': 4,
        'min-tokens': 50
    },
    dev: {
        files: {
            src: '<%= linterJs %>'
        }
    }
};
