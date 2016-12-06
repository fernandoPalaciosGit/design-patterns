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

        it('Reflect.construct: call a Constructor with a set of arguments.', function (next) {
            class Greeting {
                constructor (options) {
                    this.greet = options.greet || '';
                }

                say () {
                    return `Hello ${this.greet}`;
                }
            }

            let oldFactoryGreet = (options = {}) => new Greeting(options),
                newFactoryGreet = (options = {}) => Reflect.construct(Greeting, [options]),
                testGreet;

            testGreet = oldFactoryGreet({ greet: 'my darling' });
            expect(testGreet).to.be.an.instanceof(Greeting);
            expect(testGreet.say()).to.be.equals('Hello my darling');

            testGreet = newFactoryGreet({ greet: 'my darling' });
            expect(testGreet.say()).to.be.equals('Hello my darling');
            expect(testGreet).to.be.an.instanceof(Greeting);
            next();
        });
    });
});
