'use strict';

var Car,
    logger = require('./../utils/output').getLogger,
    _ = require('lodash');

Car = function (options) {
    this.model = options.model;
    this.year = options.date || new Date();
    this.color = options.color;
};

_.assign(Car.prototype, {
    getInfo: function () {
        return logger.printPropertyList(this);
    }
});

module.exports = Car;
