'use strict';

/*jshint proto:true*/
var testObjectDataDescriptor, testDataDescriptor;

testObjectDataDescriptor = Object.create(Object);

Object.defineProperty(testObjectDataDescriptor, 'someKey', {
    __proto__: null,    // no inherited properties // in order to ensure preserve these properties behaveour
    value: 'someValue', // property value
    configurable: true, // can change typeof && can delete from Object
    enaumerable: true,  // can show by iterate into Object
    writable: true      // can be modified
});

Object.defineProperties(testObjectDataDescriptor, {
    'someAnimal': {
        value: 'somePet',
        writable: true
    },
    'anotherAnimal': {
        value: 'someWild',
        writable: false
    }
});

testDataDescriptor = function (name) {
    this.name = name;

    Object.defineProperty(this, 'skills', {
        value: [],
        writable: true
    });

    Object.defineProperty(this, 'proyects', {
        value: [],
        writable: false
    });
};

testDataDescriptor.prototype.addSkills = function (skill) {
    this.skills.push(skill);
};

testDataDescriptor.prototype.addProyects = function (proyect) {
    this.proyects.push(proyect);
};

module.exports.testObjectDataDescriptor = testObjectDataDescriptor;
module.exports.testDataDescriptor = testDataDescriptor;
