'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect,
        jsExamples = require('./../../main/patterns/happy-thoughts');

    context('Javascript Contructors and Prototypes', function () {
        var Person, PersonFromScope, Mammal, Cat, bobby;

        before(function () {
            Person = jsExamples.Person;
            PersonFromScope = jsExamples.PersonFromScope;
            Mammal = jsExamples.Mammal;
            Cat = jsExamples.Cat;
        });

        it('should create instance from prototype', function (next) {
            bobby = new Person('Bobby Fisher');
            expect(bobby).to.be.instanceof(Person);
            expect(bobby).to.have.property('name', 'Bobby Fisher');
            next();
        });

        it('should elevate \'this\' to global scope, and could not catch instance to variable', function (next) {
            /* jshint newcap:false */
            bobby = Person('Bobby Fisher');
            expect(bobby).to.not.be.instanceof(Person);
            expect(bobby.name).to.be.undefined;
            expect(window.name).to.be.equals('Bobby Fisher');
            next();
        });

        it('should constructor expose scope as instance variable, neither callee constructor point outside its scope', function (next) {
            /* jshint newcap:false */
            bobby = PersonFromScope('Bobby Fisher');
            expect(bobby).to.be.instanceof(PersonFromScope);
            expect(window.surname).to.be.undefined;
            expect(bobby.surname).to.be.equals('Bobby Fisher');
            next();
        });

        it('should return constructor scope from any type, saving primitive types', function (next) {
            bobby = new Mammal('Bobby Fisher');
            expect(bobby).to.not.be.intanceof(Mammal);
            expect(bobby).to.be.intanceof(Cat);
            next();
        });
    });

    context('Javascript Prototypes Inheritance', function () {
        context('Instance Pianist -> Pianist.prototype -> Person.prototype -> Function.prototype -> Object.prototype', function () {
            var Pianist, bobby;

            before(function () {
                Pianist = jsExamples.Pianist;
            });

            it('should inheritance prototypes properties and behaviour', function (next) {
                /* jshint proto:true */
                bobby = new Pianist('Grandioso');
                expect(bobby).to.be.instanceof(Pianist);
                expect(bobby.__proto__).to.deep.equals(Pianist.prototype);
                expect(bobby.constructor).to.deep.equals(Pianist.prototype.constructor);
                next();
            });

            it('should chaining inheritance with first prototype own properties', function (next) {
                bobby = new Pianist('Grandioso');
                expect(bobby).to.be.instanceof(Pianist);
                expect(bobby).to.have.ownProperty('handicap');
                expect(bobby).to.have.ownProperty('scoreSharpSound');
                expect(bobby).to.have.ownProperty('pianoMark');
                expect(bobby).not.to.have.ownProperty('name');
                expect(bobby).not.to.have.ownProperty('aviableInstance');
                next();
            });

            it('should chaining inheritance from all prototypes hierarchy', function (next) {
                bobby = new Pianist('Grandioso');
                expect(bobby.handicap).to.be.equals('enhancement');
                expect(bobby.scoreSharpSound()).to.be.equals(100);
                expect(bobby.pianoMark).to.be.equals('Yamaha');
                expect(bobby.name).to.be.equals('Grandioso');
                expect(bobby.surname).to.be.equals('Magnificent');
                expect(bobby.isProgrammer).to.be.equals(false);
                expect(bobby.aviableInstance).to.be.equals(true);
                next();
            });
        });
    });
});
