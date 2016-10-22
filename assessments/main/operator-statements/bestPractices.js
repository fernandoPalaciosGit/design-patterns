/* eslint-disable no-unused-vars, no-warning-comments */
'use strict';

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
var moduleScope = window || global;

module.exports.bestPracticesAnswers = {
    globals: function () {
        moduleScope.myObject = {
            name: 'Jory'
        };

        return moduleScope.myObject;
    },

    parseInt: function (num) {
        return Number.parseInt(num);
    },

    identity: function (val1, val2) {

    }
};
