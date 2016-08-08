'use strict';

var _ = require('lodash'),
    CarDirector = require('./patterns/builder/app.module.CarDirector'),
    OpelAstraBuilder = require('./patterns/builder/app.module.CarBuilder').opelAstra,
    NissanCascais = require('./patterns/builder/app.module.CarBuilder').nissanCascais;

document.addEventListener('DOMContentLoaded', _.bind(console.info, console, 'initialize application'), false);

var director = new CarDirector();
var opelBuilder = new OpelAstraBuilder();
var nissanBuilder = new NissanCascais();
var opel = director.createCar(opelBuilder);
var nissan = director.createCar(nissanBuilder);

console.log(opel);
console.log(nissan);
