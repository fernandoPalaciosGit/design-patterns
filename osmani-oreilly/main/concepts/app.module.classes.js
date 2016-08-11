'use strict';

var Car, _ = require('lodash');

Car = function (options) {
    this.model = options.model;
    this.year = options.date || new Date();
    this.color = options.color;
};

Car.prototype = _.create({
    constructor: Car,
    getInfo: function () {
        return [
            this.model,
            this.year.toUTCString()
        ].join(', ');
    }
});

module.exports = Car;
