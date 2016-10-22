/* eslint-disable no-unused-vars, no-inner-declarations */
'use strict';

module.exports.arraysAnswers = {
    indexOf: function (arr, item, prototypeTest) {
        let index = -1;

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
            for (let i = 0, len = arr.length; i < len; i++) {
                if (arr[i] === item) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    },

    sum: function (arr, prototypeTest) {
        let sum = 0;

        if (!!Array.prototype.reduce && prototypeTest === 'reduce') {
            sum = arr.reduce(function (prev, current) {
                return prev + current;
            }, sum);

        } else {
            arr.forEach(function (val) {
                sum += val;
            });
        }

        return sum;
    },

    remove: function (arr, item, prototypeTest) {
        if (!!Array.prototype.filter && prototypeTest === 'filter') {
            return arr.filter(function (val) {
                return val !== item;
            });

        } else {
            let solve = [];

            arr.forEach(function (val) {
                if (val !== item) {
                    solve.push(val);
                }
            });

            return solve;
        }
    },

    removeWithoutCopy: function (arr, item) {
        var copy = arr.slice(0), count = 0;

        copy.forEach(function (val, index) {
            if (val === item) {
                arr.splice(index -= count, 1);
                count++;
            }
        });

        return arr;
    },

    append: function (arr, item, prototypeTest) {
        if (!!Array.prototype.push && prototypeTest === 'push') {
            arr.push(item);

        } else {
            arr[arr.length] = item;
        }

        return arr;
    },

    truncate: function (arr, prototypeTest) {
        if (!!Array.prototype.push && prototypeTest === 'pop') {
            arr.pop();

        } else {
            arr.splice(arr.length - 1, 1);
        }

        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);

        return arr;
    },

    curtail: function (arr, prototypeTest) {
        if (!!Array.prototype.push && prototypeTest === 'shift') {
            arr.shift();

        } else {
            arr.splice(0, 1);
        }

        return arr;
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
