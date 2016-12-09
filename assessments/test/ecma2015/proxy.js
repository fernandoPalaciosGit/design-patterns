'use strict';

let getProxy = require('./../../main/ecma2015/proxy'),
    expect = require('chai').expect;

describe('Ecma 2015 - Proxy, Reflection through intercession', function () {
    expect(getProxy).to.be.an('object');

    context('Create proxy in objects', function () {
        /*todo: api polyfill not hook object*/
        it.skip('any alterations you make with Proxy will be reflected onto the original object, and vice versa', function (next) {
            let testObject = {
                    [Symbol.for('foo')]: 'foo'
                },
                proxyTest = new Proxy(testObject, {/*handler hooks*/});

            expect(testObject).not.deep.equals(proxyTest);
            expect(testObject[Symbol.for('foo')]).to.equals(proxyTest[Symbol.for('foo')]);
            testObject.bar = 'bar';
            expect(proxyTest.bar).to.equals('bar');
            next();
        });

        /*todo: api polyfill not support instanceof(Proxy)*/
        it.skip('every one of the Reflect methods has a Proxy Handler Hook', function (next) {
            let reflectHandlerHooks, proxyTest;

            reflectHandlerHooks = {
                apply: Reflect.apply,
                construct: Reflect.construct,
                defineProperty: Reflect.defineProperty,
                getOwnPropertyDescriptor: Reflect.getOwnPropertyDescriptor,
                deleteProperty: Reflect.deleteProperty,
                getPrototypeOf: Reflect.getPrototypeOf,
                setPrototypeOf: Reflect.setPrototypeOf,
                isExtensible: Reflect.isExtensible,
                preventExtensions: Reflect.preventExtensions,
                get: Reflect.get,
                set: Reflect.set,
                has: Reflect.has,
                ownKeys: Reflect.ownKeys
            };
            proxyTest = new Proxy({}, reflectHandlerHooks);
            expect(proxyTest).to.be.an.instanceof(Proxy);
            expect(Reflect.ownKeys(Reflect)).to.include.members(Reflect.ownKeys(reflectHandlerHooks));
            next();
        });
    });
});
