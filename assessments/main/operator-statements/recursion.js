/* eslint-disable no-unused-vars */
'use strict';

module.exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var getFiles, keyData = 'files',
            files = [],
            checkType = function (obj, type) {
                return Object.prototype.toString.call(obj).toLowerCase().lastIndexOf(type) > 1;
            },
            extension = checkType(dirName, 'string') ? new RegExp('.' + dirName + '$') : /(\.\w*)$/;

        getFiles = function getFiles (dataList) {
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
        }(data);

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

    },

    fibonacci: function (n) {

    },

    validParentheses: function (n) {

    }
};
