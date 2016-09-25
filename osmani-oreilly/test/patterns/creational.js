'use strict';

describe('Design patterns', function () {
    context('Creational (object pattern)', function () {
        var moduleDescriptor, objectDescriptor, TestDescriptor, test;

        before(function () {
            moduleDescriptor = require('./../../main/patterns/creational');
            objectDescriptor = moduleDescriptor.testDataDescriptor;
            TestDescriptor = moduleDescriptor.testObjectDataDescriptor;
        });

        beforeEach(function () {
            test = new TestDescriptor('test descriptor');
        });

        it('should create object properties by \'data descriptor\' from \'defineProperty\' Object prototype function', function (next) {
            objectDescriptor.someAnimal;
            next();
        });

        it('should create writable properties', function (next) {
            test.addSkills;
            next();
        });

        it('should create final properties', function (next) {
            test.addProyects;
            next();
        });
    });
});
