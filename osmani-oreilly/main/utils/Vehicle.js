'use strict';

let Vehicle, logger = require('./../utils/Output').getLogger;

Vehicle = function (options) {
    this.distributor = options.distributor || 'distributor not provided';
    this.aviableLicence = true;
};

Vehicle.prototype = {
    enableLicence: function (enable) {
        this.aviableLicence = enable;
    },
    changeDistributor: function (newDist) {
        this.distributor = newDist;
    },
    getInfo: function () {
        return logger.printPropertyList(this);
    }
};

Vehicle.prototype.constructor = Vehicle;

module.exports = Vehicle;
