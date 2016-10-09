'use strict';

var vehiclePrototype, ObjCreateCar;

vehiclePrototype = {
    getModel: function () {
        return this.model;
    },
    setModel: function (model) {
        this.model = model;
    }
};

ObjCreateCar = function (model) {
    let F, f;

    F = function () {
        return this;
    };
    F.prototype = vehiclePrototype;
    F.prototype.constructor = F;
    f = new F();
    f.setModel(model);

    return f;
};

module.exports.getCarFromDescriptor = function (model) {
    return Object.create(vehiclePrototype, {
        'model': {
            value: model,
            enumerable: true // writable: false, configurable: false
        }
    });
};

module.exports.getCarFromObject = function (model) {
    return new ObjCreateCar(model);
};
