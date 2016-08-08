'use strict';

var CarDirector = require('./patterns/builder/app.module.CarDirector'),
    OpelAstraBuilder = require('./patterns/builder/app.module.CarBuilder').opelAstra;

var car = new CarDirector();
var opel = new OpelAstraBuilder();

car.name;
opel.name;
