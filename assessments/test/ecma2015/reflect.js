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

        // "Object.defineProperty" is @deprecated
        it('Reflect.defineProperty: lets you define metadata about a propert, that it acts on object literals', function (next) {
            let now = new Date(), myDate;

            expect(function () {
                Reflect.defineProperty(1, 'test', {});
            }).to.throw(TypeError/*'Reflect.defineProperty called on non-object'*/);

            class MyDate {
            }

            Object.defineProperty(MyDate.prototype, 'nowDateByObject', {
                value: now
            });
            // New Style, not weird because Reflect does Reflection.
            Reflect.defineProperty(MyDate.prototype, 'nowDateByReflection', {
                value: now
            });
            myDate = new MyDate();
            expect(myDate).to.be.an.instanceof(MyDate);
            expect(myDate.nowDateByObject).to.be.equals(now);
            expect(myDate.nowDateByReflection).to.be.equals(now);
            next();
        });

        // "Object.getOwnPropertyDescriptor" is @deprecated
        it('Reflect.getOwnPropertyDescriptor: getting the descriptor metadata of a property', function (next) {
            let testObject = {}, testArray = [];

            expect(function () {
                Reflect.getOwnPropertyDescriptor(1, 'test', {});
            }).to.throw(TypeError/*'Reflect.getOwnPropertyDescriptor called on non-object'*/);

            Reflect.defineProperty(testObject, 'hidden', {
                value: true,
                enumerable: false // not shows up during enumeration of the properties
            });

            for (let property in testObject) {
                if (testObject.hasOwnProperty(property)) { // iterate over not prototype (inherit properties)
                    testArray.push(property);
                }
            }

            expect(testArray).not.to.include('hidden');

            let testObjectDescriptor = Reflect.getOwnPropertyDescriptor(testObject, 'hidden');

            expect(testObjectDescriptor).to.have.property('value', true);
            expect(testObjectDescriptor).to.have.property('enumerable', false);
            next();
        });

        // "delete object.property" is @deprecated
        it('Reflect.deleteProperty: drives the behavior of "delete object.property"', function (next) {
            let testObject = {
                foo: 'foo',
                bar: 'bar'
            };

            delete testObject.foo;
            expect(testObject).not.to.have.property('foo');
            Reflect.deleteProperty(testObject, 'bar');
            expect(testObject).not.to.have.property('bar');
            next();
        });
    });
});
