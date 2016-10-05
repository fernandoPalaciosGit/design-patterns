'use strict';

let Car, logger = require('./../utils/Output').getLogger;

Car = function (options) {
    this.model = options.model;
    this.year = options.date || new Date();
    this.color = options.color;
};

Car.prototype = {
    getInfo: function () {
        return logger.printPropertyList(this);
    }
};

Car.prototype.constructor = Car;

module.exports = Car;
