/* eslint-disable no-unused-vars */
'use strict';

let _ = require('lodash');

module.exports.asyncAnswers = {
    async: function (value) {
        if (!_.isUndefined(window.Promise)) {
            return new Promise(function (resolve) {
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

    }
};
