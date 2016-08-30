'use strict';

var _ = require('lodash');

module.exports = {
    getCurrentTime: function () {
        var date = new Date();

        return _.join([
            date.getMonth() + 1,
            date.getDate(),
            date.getFullYear(),
            date.toLocaleTimeString().toLowerCase()
        ], '/');
    }
};