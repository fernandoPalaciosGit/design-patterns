/* eslint-disable no-unused-vars, no-inner-declarations */
'use strict';

module.exports.arraysAnswers = {
    polifillArraysAnswers: null,
    indexOf: function (arr, item) {
        let index = -1;

        if (this.polifillArraysAnswers === 'indexOf' && !!Array.prototype.indexOf) {
            index = arr.indexOf(item);

        } else if (this.polifillArraysAnswers === 'findIndex' && !!Array.prototype.findIndex) {
            index = arr.findIndex(function (val) {
                return val === item;
            });

        } else if (this.polifillArraysAnswers === 'forEach' && !!Array.prototype.forEach) {
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

    sum: function (arr) {
        let sum = 0;

        if (this.polifillArraysAnswers === 'reduce' && !!Array.prototype.reduce) {
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

    remove: function (arr, item) {
        if (this.polifillArraysAnswers === 'filter' && !!Array.prototype.filter) {
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
        let copy = arr.slice(0), count = 0;

        copy.forEach(function (val, index) {
            if (val === item) {
                arr.splice(index -= count, 1);
                count++;
            }
        });

        return arr;
    },

    append: function (arr, item) {
        if (this.polifillArraysAnswers === 'push' && !!Array.prototype.push) {
            arr.push(item);

        } else {
            arr[arr.length] = item;
        }

        return arr;
    },

    truncate: function (arr) {
        if (this.polifillArraysAnswers === 'pop' && !!Array.prototype.pop) {
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

    curtail: function (arr) {
        if (this.polifillArraysAnswers === 'shift' && !!Array.prototype.shift) {
            arr.shift();

        } else {
            arr.splice(0, 1);
        }

        return arr;
    },

    concat: function (arr1, arr2) {
        if (this.polifillArraysAnswers === 'forEach' && !!Array.prototype.forEach) {
            arr2.forEach(function (val) {
                arr1.push(val);
            });

            return arr1;

        } else {
            return arr1.concat(arr2);
        }
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);

        return arr;
    },

    count: function (arr, item) {
        return arr.filter(function (val) {
            return val === item;
        }).length;
    },

    uniques: function (arr) {
        return arr.filter(function (val, index, array) {
            return array.indexOf(val) === index;
        });
    },

    duplicates: function (arr) {

    },

    square: function (arr) {
        return arr.map(function (val) {
            return Math.pow(val, 2);
        });
    },

    findAllOccurrences: function (arr, target) {
        let occurrences;

        if (this.polifillArraysAnswers === 'reduce' && !!Array.prototype.reduce) {
            occurrences = arr.reduce(function (memo, val, index) {
                if (val === target) {
                    memo.push(index);
                }

                return memo;
            }, []);

        } else {
            occurrences = [];
            arr.forEach(function (val, index) {
                if (val === target) {
                    occurrences.push(index);
                }
            });
        }

        return occurrences;
    }
};
