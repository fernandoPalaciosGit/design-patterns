'use strict';

let expect = require('chai').expect;

describe('Ecma 2015 - Symbols, reflection', function () {
    it('should create symbol primitive type without, only init with its constructor', function (next) {
        expect(typeof Symbol()).to.be.equals('symbol');
        expect(function () {
            new Symbol();
        }).to.throw(TypeError, 'Symbol is not a constructor');
        next();
    });

    it('should debuggability, by given a description on its instance', function (next) {
        expect(Symbol('test').toString()).to.have.string('Symbol(test)');
        next();
    });

    it('should not be pass as reference like as primitive, and has its own unique index value assign', function (next) {
        let foo = Symbol('foo'),
            test = {
                symbolFoo: foo
            };

        expect(test.symbolFoo).to.be.equals(foo);
        foo = Symbol('newFoo');
        expect(test.symbolFoo).not.to.be.equals(foo);
        expect(test.symbolFoo).not.to.be.equals(Symbol('foo'));
        expect(Symbol('foo')).not.to.be.equals(Symbol('foo'));
        next();
    });

    it('should be referenced, only with getOwnPropertySymbols interface', function (next) {
        let propFoo = Symbol('foo'),
            propBar = 'bar',
            propBeer = 'beer',
            test = {},
            expectedOwnPropertySymbol = [propFoo],
            expectedOwnDescriptor = [propBar, propBeer];

        test[propFoo] = 'foo'; // symbol reference
        test[propBar] = 'bar'; // property reference
        test[propBeer] = 'beer'; // property reference
        expect(Object.keys(test)).to.deep.include.members(expectedOwnDescriptor);
        expect(Object.getOwnPropertyNames(test)).to.deep.include.members(expectedOwnDescriptor);
        expect(Object.getOwnPropertySymbols(test)).to.deep.include.members(expectedOwnPropertySymbol);
        expect(Object.getOwnPropertySymbols(test)[0]).to.be.equals(propFoo);
        expect(test[Object.getOwnPropertySymbols(test)[0]]).to.be.equals('foo');
        next();
    });

    it('should have exception to be unique symbols, same Symbol reference,in a global variable called symbol registry', function (next) {
        // Symbol.for('foo') = 'symbol registred as foo'
        expect(Symbol('foo')).not.to.be.equal(Symbol('foo'));
        expect(Symbol.for('foo')).not.to.be.equal(Symbol('foo'));
        expect(Symbol.for('foo')).to.be.equal(Symbol.for('foo'));

        let test = {},
            propFoo = Symbol.for('foo'),
            propBar = Symbol.for('foo');

        test[propFoo] = 'foo';
        test[propBar] = 'bar'; // last reference override on the unique symbol
        expect(propFoo).to.be.equal(propBar);
        expect(test[propFoo]).to.be.equal('bar');
        expect(test[propBar]).to.be.equal('bar');
        next();
    });

    it('should enumerable Symbols can be copied to other object', function (next) {
        let test = {}, testCopy = {},
            beer = Symbol('beer'),
            foo = Symbol('foo'),
            bar = Symbol('bar');

        test[foo] = 'foo';
        test[bar] = 'bar';
        testCopy[beer] = 'beer';
        Object.assign(testCopy, test);
        expect(Object.getOwnPropertySymbols(test)).to.deep.include.members([foo, bar]);
        expect(Object.getOwnPropertySymbols(testCopy)).to.deep.include.members([beer, foo, bar]);
        next();
    });
});
