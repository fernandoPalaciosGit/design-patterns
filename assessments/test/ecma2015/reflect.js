'use strict';

let getReflect = require('./../../main/ecma2015/reflect'),
    expect = require('chai').expect;

describe('Ecma 2015 - Reflect, reflection through introspection', function () {
    expect(getReflect).to.be.an('object');
});