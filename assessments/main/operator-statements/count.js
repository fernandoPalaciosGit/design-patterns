/* eslint-disable no-unused-vars, no-console */
'use strict';

var scope = window || global;

/**
 * function count, that takes two arguments: a starting number,
 * and an ending number. The function should console.log each number from the start
 * number to the end number, one number per 1/10th of a second. The function should
 * return an object with a cancel method, which should cancel the counting.
 */

module.exports.countAnswers = {
    count: function (start, end) {
        var outTimeout = null, initLogger, stopLogger;

        stopLogger = function () {
            outTimeout !== null && scope.clearTimeout(outTimeout);
        };

        initLogger = function () {
            console.log(start++);

            if (start <= end) {
                outTimeout = scope.setTimeout(function () {
                    initLogger();
                }, 100);

            } else {
                stopLogger();
            }
        };

        initLogger();

        return {
            cancel: stopLogger
        };
    }
};
