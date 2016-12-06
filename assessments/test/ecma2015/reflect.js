'use strict';

let getReflect = require('./../../main/ecma2015/reflect'),
    expect = require('chai').expect;

describe('Ecma 2015 - Reflect, reflection through introspection', function () {
    expect(getReflect).to.be.an('object');

    context('Reflection to access internal methods: specs of JS engine', function () {
    });

    context('Reflection to override internal methods', function () {
        it('Reflect.apply: drives method of Function#apply', function (next) {
            let array = [7, 1, 45, 98, 3], min = 1, max = 98, type = '[object Array]';

            expect(Math.max.apply(Math, array)).to.be.equals(max);
            expect(Math.min.apply(Math, array)).to.be.equals(min);
            expect(Object.prototype.toString.apply(array)).to.be.equals(type);
            expect(Reflect.apply(Math.max, Math, array)).to.be.equals(max);
            expect(Reflect.apply(Math.min, Math, array)).to.be.equals(min);
            expect(Reflect.apply(Object.prototype.toString, array, [])).to.be.equals(type);
            next();
        });
    });
});
