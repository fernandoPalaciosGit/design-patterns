/* eslint-disable no-unused-vars */
'use strict';

let _ = require('lodash');

module.exports.asyncAnswers = {
    async: function (value) {
        if (!_.isUndefined(window.Promise)) {
            return new window.Promise(function (resolve) {
                window.setTimeout(function () {
                    resolve(value);
                }, 1000);
            });

        } else {
            let $ = require('jquery'),
                deferred = $.Deferred();

            window.setTimeout(function () {
                deferred.resolve(value);
            }, 1000);

            return deferred.promise();
        }
    },

    manipulateRemoteData: function (url) {
        if (!_.isUndefined(window.Promise) && !_.isUndefined(window.XMLHttpRequest)) {
            return new window.Promise(function (resolve) {
                let xhr = new window.XMLHttpRequest();

                xhr.open('GET', url);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                };
                xhr.send();
            });

        } else {
            let $ = require('jquery'),
                deferred = $.Deferred();

            $.getJSON(url, function (data) {
                deferred.resolve(data);
            });

            return deferred.promise();
        }
    }
};
