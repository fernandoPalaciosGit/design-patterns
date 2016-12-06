'use strict';

let getProxy = require('./../../main/ecma2015/proxy'),
    expect = require('chai').expect;

describe('Ecma 2015 - Proxy, Reflection through intercession', function () {
    expect(getProxy).to.be.an('object');
});
