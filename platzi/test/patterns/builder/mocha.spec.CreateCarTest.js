'use strict';
/*

var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;
*/

describe('Design patterns', function () {
    context('Builder with factory', function () {
        var CarDirector = require('./../../../main/patterns/builder/app.module.CarDirector'),
            OpelAstraBuilder = require('./../../../main/patterns/builder/app.module.CarBuilder').opelAstra,
            carDirector, opelAstraBuilder;

        it('should create a Opel Astra', function () {
            carDirector = new CarDirector();
            opelAstraBuilder = new OpelAstraBuilder();
        });

        it('should create a Nissan Cascais');
    });
});
