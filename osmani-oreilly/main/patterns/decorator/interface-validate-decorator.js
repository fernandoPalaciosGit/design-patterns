'use strict';

/**
 * A diferencia del patron de herencia de prototipos, el decorador es una clase que extiende el comportamiento de una instancia,
 * sin necesidad de manipular su prototipo, se utiliza cuando se necesita delegar mas respoinsabilidades al objeto.
 * Especialmente cuando quieres tener muchos tipos de objetos con pequenños cambios en el comportamiento.
 *
 * Interface behaviour: An interface is a way of defining the methods an object *should* have, however, it doesn't actually directly specify how those methods should be implemented,
 * Interface as an abstract class: Abstract decorators ensure that we can decorate a base class independently with as many decorators as needed in different combinations.
 */
var Laptop, Macbook, MacbookPro, MacbookRetina,
    getInterface = require('./../../utils/Interface'),
    _ = require('lodash');

/*
 * SuperClass prototype Laptop
 */
Laptop = function () {
    this.isPortable = true;
};

_.assign(Laptop.prototype, {
    incrementPrice: function (increment) {
        this.price += increment;
    },
    incrementScreenSize: function (increment) {
        this.screenSize += increment;
    },
    incrementRamSize: function (increment) {
        this.ram += increment;
    }
});

/*
 * Subclass prototype
 */
Macbook = function () {
    Laptop.apply(this, arguments);
    this.price = 1500;
    this.camera = '13 MGpx';
    this.ram = 256;
    this.screenSize = 12;
    this.pixelRatio = 1.5;
};

Macbook.prototype = _.create(Laptop.prototype, {
    constructor: Macbook,
    // @Override
    add500GBRam: function () {
        this.incrementPrice(100);
        this.incrementRamSize(244);
    },
    // @Override
    add1TBRam: function () {
        this.incrementPrice(350);
        this.incrementRamSize(278);
    },
    // @Override
    addRetina13: function () {
        this.incrementPrice(250);
        this.incrementScreenSize(1);
    },
    // @Override
    addRetina15: function () {
        this.incrementPrice(500);
        this.incrementScreenSize(3);
    },
    // @Override
    duplicatePixelRatio: function () {
        this.incrementPrice(250);
        this.incrementRamSize(100);
    }
});

/*
 * Interface/Decorator prototypes
 */
MacbookPro = function (macbook) {
    var macbookInterface = getInterface({
        name: 'Macbook',
        methodsImplemented: ['add500GBRam', 'add1TBRam', 'addRetina13', 'addRetina15'],
        interfaceImplemented: macbook.constructor
    });

    this.interfaceName = macbookInterface.name;
    this.interfaceMethods = macbookInterface.methods;
    this.macbook = macbook;
};

_.assign(MacbookPro.prototype, {
    add500GBRam: function () {
        this.macbook.add500GBRam();
    },
    add1TBRam: function () {
        this.macbook.add1TBRam();
    },
    addRetina13: function () {
        this.macbook.addRetina13();
    },
    addRetina15: function () {
        this.macbook.addRetina15();
    }
});

MacbookRetina = function (macbook) {
    var macbookInterface = getInterface({
        name: 'Macbook',
        methodsImplemented: ['duplicatePixelRatio', 'add500GBRam', 'add1TBRam'],
        interfaceImplemented: macbook.constructor
    });

    this.interfaceName = macbookInterface.name;
    this.interfaceMethods = macbookInterface.methods;
    this.macbook = macbook;
};

_.assign(MacbookRetina.prototype, {
    duplicatePixelRatio: function () {
        this.macbook.duplicatePixelRatio();
        this.macbook.addRetina15();
        this.macbook.pixelRatio = 2;
        this.macbook.camera = '15 MGpx';
    },
    add500GBRam: function () {
        this.macbook.add500GBRam();
    },
    add1TBRam: function () {
        this.macbook.add1TBRam();
    }
});

module.exports = {
    getMackbookConstructor: Macbook, // only for reasons of testing
    getMackBookPro: function (options) {
        var laptop = new Macbook(options || {});

        return new MacbookPro(laptop);
    },
    getMackBookRetina: function (options) {
        var laptop = new Macbook(options || {});

        return new MacbookRetina(laptop);
    }
};
