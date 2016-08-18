'use strict';

var _ = require('lodash'), cost, MacBook, engravingMacBook, insuranceLowMacBook, insuranceHighMacBook;

cost = (function () {
    var _applyTax = 0, _changeTax, _calculateWithTax, _getCost;

    _getCost = function (cost, percentage) {
        var applyPercentage = cost > 0 ? percentage : 0;

        return ((applyPercentage * cost) / 100) + cost;
    };

    _changeTax = function (cost, tax) {
        _applyTax = (tax / 100) * cost;
    };

    _calculateWithTax = function (cost, percentage, isTaxAviable) {
        var applyCost = _getCost(cost, percentage);

        return !isTaxAviable ? applyCost : applyCost + _applyTax;
    };

    return {
        changeTax: _changeTax,
        calculate: _.partialRight(_calculateWithTax, false),
        calculateWithTax: _.partialRight(_calculateWithTax, true)
    };
}());

MacBook = function (options) {
    this.screenAviable = [11, 15, 17];
    this.cost = options.cost || 0;
    this.screenSize = this.checkAviableScreen(options.screenSize) ? options.screenSize : -1;
};

_.assign(MacBook.prototype, {
    checkAviableScreen: function (screenSize) {
        return _.includes(this.screenAviable, screenSize);
    }
});

/**
 * Decorator
 */
engravingMacBook = function (mackbook) {
    mackbook.getEngravingCost = 18;
};

/**
 * Decorator
 */
insuranceLowMacBook = function (mackbook) {
    cost.changeTax(mackbook.cost, 20);
    mackbook.getInsuranceCost = cost.calculateWithTax(mackbook.cost, 8.5);
};

/**
 * Decorator
 */
insuranceHighMacBook = function (mackbook) {
    cost.changeTax(mackbook.cost, 18);
    mackbook.getInsuranceCost = cost.calculateWithTax(mackbook.cost, 12);
};

module.exports = {
    getMacBook: function (options) {
        return new MacBook(options || {});
    },
    decorateMac: {
        engravingCost: engravingMacBook,
        insuranceLow: insuranceLowMacBook,
        insuranceHigh: insuranceHighMacBook
    }
};