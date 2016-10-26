/* eslint-disable no-unused-vars */
'use strict';

/**
 * if the number is divisible by 5, the function should return 'buzz';
 * if the number is divisible by 3, the function should return 'fizz';
 * if the number is divisible by 3 and 5, the function should return 'fizzbuzz';
 * otherwise the function should return the number, or false if no number
 * was provided or the value provided is not a number
 * */
module.exports.flowControlAnswers = {
    fizzBuzz: function (num) {
        var key = null,
            codes = {
                'fizzbuzz': num % 3 === 0 && num % 5 === 0,
                'fizz': num % 3 === 0,
                'buzz': num % 5 === 0,
                'true': typeof num === 'number',
                'false': typeof num !== 'number'
            };

        for (key in codes) {
            if (codes.hasOwnProperty(key) && codes[key]) {
                return key === 'true' ? num : key === 'false' ? false : key;
            }
        }
    }
};
