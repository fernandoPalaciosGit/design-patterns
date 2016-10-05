'use strict';

let Vehicle;

Vehicle = function (options) {
    this.distributor = options.distributor || 'distributor not provided';
    this.aviableLicence = true;
};

Vehicle.prototype = {
    enableLicence: function (enable) {
        this.aviableLicence = enable;
    },
    chenageDistributor: function (newDist) {
        this.distributor = newDist;
    }
};

Vehicle.prototype.constructor = Vehicle;

module.exports = Vehicle;
