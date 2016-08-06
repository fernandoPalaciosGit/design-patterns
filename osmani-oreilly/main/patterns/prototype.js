'use strict';

// prototype pattern with definition initalize
var vehiclePrototype = {
    getModel: function () {
        return this.model;
    },
    setModel: function (model) {
        this.model = model;
    }
};

var car = Object.create(vehiclePrototype, {
    'model': {
        value: 'Ford',
        enumerable: true // writable: false, configurable: false
    }
});
car.getModel();

/////////////////////////
// imimitating pattERN //
/////////////////////////
var ObjCreateCar = function (model) {
    var F = function () {};
    F.prototype = vehiclePrototype;

    var f = new F();
    f.setModel(model);
    return f;
};

var car2 = new ObjCreateCar('Ford'); // WRITABLE : TRUE
car2.model;
