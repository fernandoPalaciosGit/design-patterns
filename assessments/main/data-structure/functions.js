/* eslint-disable no-unused-vars */
'use strict';

var arrayUtils = require('./arrays').arraysAnswers;

module.exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply({}, arr);
    },

    speak: function (fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function (str1) {
        return function (str2) {
            return [str1, str2].join(', ');
        };
    },

    makeClosures: function (arr, fn) {
        return arr.map(function (val) {
            return function () {
                return fn(val);
            };
        });
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments: function () {
        return Array.prototype.reduce.call(arguments, function (sum, val) {
            return sum + val;
        }, 0);
    },

    callIt: function (fn) {
        Array.prototype.shift.call(arguments);
        fn.apply({}, arguments);
    },

    partialUsingArguments: function () {
        var callback, partials, args;

        partials = arrayUtils.argsToArray(arguments);
        callback = partials.shift();

        return function () {
            args = arrayUtils.argsToArray(arguments);

            return callback.apply(this, partials.concat(args));
        };
    },

    curryIt: function (fn) {
        function applyArguments(_fn, args) {
            return _fn.apply({}, args);
        }

        function getPartialArguments(accumulatedArgs, expectedArgs) {
            return function (currentArg) {
                accumulatedArgs.push(currentArg);

                if (accumulatedArgs.length === expectedArgs) {
                    return applyArguments(fn, accumulatedArgs);

                } else {
                    return getPartialArguments(accumulatedArgs, expectedArgs);
                }
            };
        }

        return getPartialArguments([], fn.length);
    },

    compose: function () {
        var lastFn = Array.prototype.shift.call(arguments),
            partialArgs = Array.prototype.slice.call(arguments, 0);

        return function () {
            var result = lastFn.apply(this, arguments),
                idxFn = partialArgs.length;

            while (idxFn > 0) {
                result = partialArgs[idxFn - 1].call(this, result);
                idxFn--;
            }

            return result;
        };
    }
};
