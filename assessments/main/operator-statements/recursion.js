/* eslint-disable no-unused-vars */
'use strict';

module.exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var keyData = 'files',
            files = [],
            checkType = function (obj, type) {
                return Object.prototype.toString.call(obj).toLowerCase().lastIndexOf(type) > 1;
            },
            extension = checkType(dirName, 'string') ? new RegExp('.' + dirName + '$') : /(\.\w*)$/;

        (function getFiles (dataList) {
            var metadata;

            for (metadata in dataList) {
                if (dataList.hasOwnProperty(metadata) && metadata === keyData &&
                    Array.isArray(dataList[metadata])) {

                    dataList[metadata].forEach(function (val) {
                        if (checkType(val, 'string') && extension.test(val)) {
                            files.push(val);

                        } else if (checkType(val, 'object')) {
                            getFiles(val);
                        }
                    });
                }
            }
        })(data);

        return files;
    },

    factorial: function (num) {
        var factorial = num,
            iteration = --num;

        for (; iteration > 0; iteration--) {
            factorial *= iteration;
        }

        return factorial;
    },

    permute: function (arr) {
        var usedChars = [], permArr = [];

        return function permute (input) {
            var i, ch;

            for (i = 0; i < input.length; i++) {
                ch = input.splice(i, 1)[0];
                usedChars.push(ch);

                if (input.length === 0) {
                    permArr.push(usedChars.slice());
                }

                permute(input);
                input.splice(i, 0, ch);
                usedChars.pop();
            }

            return permArr;
        }(arr);
    },

    fibonacci: function (n) {
        var series = [1],
            i = 1;

        for (; n > 0 && i !== n; i++) {
            series[i] = series[i - 1] + (series[i - 2] || 0);
        }

        return series.pop();
    },

    validParentheses: function (n) {

    }
};
