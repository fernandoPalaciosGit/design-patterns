/* eslint-disable no-unused-vars */
'use strict';

module.exports.regexAnswers = {
    containsNumber: function (str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter: function (str) {
        return /([a-zA-Z]+)\1/.test(str);
    },

    endsWithVowel: function (str) {
        return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers: function (str) {
        var match = str.match(/\d{3}/);

        return Array.isArray(match) ? match[0] : false;
    },

    // the pattern is 3X-3X-4X where all X's are digits
    matchesPattern: function (str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },

    isUSD: function (str) {
        return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
    }
};
