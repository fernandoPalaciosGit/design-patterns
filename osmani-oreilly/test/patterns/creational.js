'use strict';

describe('Design patterns', function () {
    context('Creational (object pattern)', function () {
        var expect = require('chai').expect,
            moduleDescriptor, objectDescriptor, TestDescriptor, test;

        before(function () {
            moduleDescriptor = require('./../../main/patterns/creational');
            objectDescriptor = moduleDescriptor.testObjectDataDescriptor;
            TestDescriptor = moduleDescriptor.testDataDescriptor;
        });

        beforeEach(function () {
            test = new TestDescriptor('test descriptor');
        });

        it('should create object properties by \'data descriptor\' from \'defineProperty\' Object prototype function', function (next) {
            expect(objectDescriptor).to.have.property('someKey', 'someValue');
            expect(objectDescriptor).to.have.property('someAnimal', 'somePet');
            expect(objectDescriptor).to.have.property('anotherAnimal', 'someWild');
            expect(test).to.have.property('name', 'test descriptor').that.is.a('string');
            expect(test).to.have.property('skills').that.is.an('array');
            expect(test).to.have.property('projects').that.is.an('array');
            next();
        });

        it('should create writable properties', function (next) {
            expect(test.skills).to.have.members([]);
            test.addSkills('programmer');
            expect(test.skills).to.have.members(['programmer']);
            next();
        });

        it('should create final properties', function (next) {
            expect(test.projects).to.have.members([]);
            test.addProjects('database');
            // wraitable from own prototypes
            expect(test.projects).to.have.members(['database']);
            // not writable from native prototypes, Cannot assign to read only property 'anotherAnimal'
            expect(function () {
                objectDescriptor.anotherAnimal = 'non-writable';
            }).to.throw(TypeError);
            expect(objectDescriptor).to.have.property('anotherAnimal', 'someWild');
            next();
        });
    });
});
