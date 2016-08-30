'use strict';

describe('Design patterns', function () {
    var objectLiteral,
        _ = require('lodash'),
        expect = require('chai').expect;

    context('Object literal Module notation', function () {
        before(function () {
            objectLiteral = require('./../../main/concepts/app.module.objects');
        });

        it('should be an object instance from Object.prototype inheritance', function (next) {
            expect(objectLiteral)
                .to.be.an('object')
                .and.to.be.instanceOf(Object);
            next();
        });

        it('should avoid to expose internal properties', function (next) {
            expect(objectLiteral.useCaching).to.not.exist;
            expect(objectLiteral.language).to.not.exist;
            next();
        });

        it('should expose internal properties', function (next) {
            expect(objectLiteral)
                .to.have.property('description')
                .that.equals('Object literal Module notation');
            next();
        });

        it('should have different property status from changed private property', function (next) {
            expect(objectLiteral.printCachingStatus())
                .that.equals('Caching is enabled');
            objectLiteral.toogleStatus();
            expect(objectLiteral.printCachingStatus())
                .that.equals('Caching is disabled');
            next();
        });

        it('should protect overriding incorrect properties', function (next) {
            expect(_.bindKey(objectLiteral, 'rewriteConfig', {none: false}))
                .to.throw(Error, 'Couldn´t find config properties into new option.');
            expect(objectLiteral.rewriteConfig({
                useCaching: false,
                language: 'ruski'
            }))
                .to.be.undefined;
            expect(objectLiteral.printCachingStatus())
                .that.equals('Caching is disabled');
            next();
        });
    });
});
