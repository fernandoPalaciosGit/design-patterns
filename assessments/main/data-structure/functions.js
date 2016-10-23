/* eslint-disable no-unused-vars */
'use strict';

module.exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(this, arr);
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

    partialUsingArguments: function (fn) {

    },

    curryIt: function (fn) {

    }
};
