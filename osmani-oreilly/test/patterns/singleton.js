'use strict';

describe('Design patterns', function () {
    let expect = require('chai').expect;

    context('Singleton (Creational object pattern)', function () {
        let singleton = require('./../../main/patterns/singleton'),
            getInstance, test, repeatTest;

        before(function () {
            getInstance = singleton.getInstance;
        });

        it('should create an instance, no more initialization', function (next) {
            test = getInstance({
                name: 'initialization'
            });
            expect(test).to.have.property('name', 'initialization');
            repeatTest = getInstance({
                name: 'failure initialization'
            });
            expect(repeatTest).not.to.have.property('name', 'failure initialization');
            expect(repeatTest).to.have.property('name', 'initialization');
            repeatTest.setName('failure initialization');
            expect(repeatTest).to.have.property('name', 'failure initialization');
            expect(test).to.have.property('name', 'failure initialization');
            next();
        });
    });
});
