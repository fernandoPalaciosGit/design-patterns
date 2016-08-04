'use strict';

var calculateCost = function (cost, perc) {
    perc = (cost > 0) ? perc : 0;
    var applyPerc = ((perc / 100) * cost) + cost;

    return function (isTaxAviable) {
        var tax = 18,
            applyTax = (tax / 100) * cost; // tax for devices
        return ( !isTaxAviable ) ?
            applyPerc : (applyPerc + applyTax);
    };
};

// MAIN CONSTRUCTOR
var Mackbook = function (prop) {
    prop = prop || {};
    var screenAviable = [11, 15, 17],
        checkAviableScreen = function (screenSize) {
            return ( screenAviable.indexOf(screenSize) > -1 ) && screenSize;
        };

    this.cost = prop.cost || 0;
    this.screenSize = checkAviableScreen(prop.screenSize) || 0;
};

// DECORATOR-1 
var engravingMackbook = function (mackbook) {
    mackbook.getEngravingCost = 18;
};

// DECORATOR-2 - Overrided
var insuranceLowMackbook = function (mackbook) {
    var memPerc = 8.5;
    mackbook.getInsuranceCost = calculateCost(mackbook.cost, memPerc);
};

// DECORATOR-2 - Overrided
var insuranceHighMackbook = function (mackbook) {
    var memPerc = 12;
    mackbook.getInsuranceCost = calculateCost(mackbook.cost, memPerc);
};

var myLaptop = new Mackbook({cost: 1250, screenSize: 17});
engravingMackbook(myLaptop); // extend this.getEngravingCost
insuranceLowMackbook(myLaptop); // extend this.getInsuranceCost

console.log(
    '\n---WITHOUT TAX---',
    '\nLow InsuranceCost : ' + myLaptop.getInsuranceCost());

insuranceHighMackbook(myLaptop);
console.log(
    '\n---change decorator InsuranceCost---',
    '\nHigh InsuranceCost : ' + myLaptop.getInsuranceCost());

console.log(
    '\n---WITH TAX---',
    '\nEngravingCost : ' + myLaptop.getEngravingCost,
    '\nHigh InsuranceCost with engraving tax : ' + myLaptop.getInsuranceCost(true));