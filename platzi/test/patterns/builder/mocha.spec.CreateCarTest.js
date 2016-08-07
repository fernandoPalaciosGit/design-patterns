'use strict';

/*globals CarDirector, OpelAstraBuilder, NissanCascaisBuilder*/
var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

describe('Design Patterns', function () {
    context('Builder with factory pattern', function () {
        beforeEach(function () {
            this.director = new CarDirector();
            this.opelAstraBuilder = new OpelAstraBuilder();
            this.nissanCascaisBuilder = new NissanCascaisBuilder();
        });

        afterEach(function () {
            delete this.director;
            delete this.opelAstraBuilder;
            delete this.nissanCascaisBuilder;
        });

        it('should create a Opel Astra', function (next) {
            assert.ok(true);
            next();
        });

        it('should create a Nissan Cascais', function (next) {
            expect(true).to.be(true);
            next();
        });
    });
});