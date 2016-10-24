/* eslint-disable no-unused-vars */
'use strict';

module.exports.stringsAnswers = {
    reduceString: function (str, amount) {
        let wordList = str.match(/(\w)\1*/g);

        return wordList.map(function (val) {
            return val.substring(0, amount);
        }).join('');
    },

    wordWrap: function (str) {
        let wrap = '\n', space = ' ';

        return str.split(/\s/g).map(function (val, index, word) {
            let hasToWrap = !!word[index + 1] && (val.length + word[index + 1].length) > 2;

            return hasToWrap ? val + wrap : word.length - 1 === index ? val : val + space;
        }).join('');
    },

    reverseString: function (str) {
        return str.split('').reverse().join('');
    }
};
