'use strict';

var _ = require('lodash'),
    RentCar,
    validation = require('./../../main/utils/Validation'),
    printer = require('./../../main/utils/Output').getPrinter;

RentCar = function () {
};

_.assign(RentCar.prototype, {
    checkBusiness: function (methodName) {
        if (validation.hasOwnPropertyChain(methodName, this)) {
            return this[methodName].apply(this, _.drop(arguments));

        } else {
            throw Error('invalid method');
        }
    },
    buyCar: function (model, price) {
        return printer.joinFields('buyCar', model, price);
    },
    requestInfo: function (model, description) {
        return printer.joinFields('requestInfo', model, description);
    }
});

module.exports = function (options) {
    return new RentCar(options || {});
};
