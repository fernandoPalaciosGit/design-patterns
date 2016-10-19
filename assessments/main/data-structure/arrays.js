'use strict';

module.exports.arraysAnswers = {
    indexOf: function (arr, item, prototypeTest) {
        var index = -1;

        if (!!Array.prototype.indexOf && prototypeTest === 'indexOf') {
            index = arr.indexOf(item);

        } else if (!!Array.prototype.findIndex && prototypeTest === 'findIndex') {
            index = arr.findIndex(function (val) {
                return val === item;
            });

        } else if (!!Array.prototype.forEach && prototypeTest === 'forEach') {
            arr.forEach(function (val, idx) {
                if (val === item) {
                    index = idx;
                }
            });

        } else {
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i] === item) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    },

    sum: function (arr) {

    },

    remove: function (arr, item) {

    },

    removeWithoutCopy: function (arr, item) {

    },

    append: function (arr, item) {

    },

    truncate: function (arr) {

    },

    prepend: function (arr, item) {

    },

    curtail: function (arr) {

    },

    concat: function (arr1, arr2) {

    },

    insert: function (arr, item, index) {

    },

    count: function (arr, item) {

    },

    duplicates: function (arr) {

    },

    square: function (arr) {

    },

    findAllOccurrences: function (arr, target) {

    }
};
