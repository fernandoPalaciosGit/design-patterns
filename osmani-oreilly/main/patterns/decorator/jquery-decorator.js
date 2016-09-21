'use strict';

var Hero, TragicHero, AntiHero,
    _ = require('lodash'),
    $ = require('jquery'),
    extendHero = function (HeroType, heroOptions) {
        return $.extend(true, {}, new Hero(heroOptions || {}), HeroType);
    };

/**
 * base type object
 */
Hero = function (options) {
    this.name = options.name;
    this.habilities = _.concat(options.habilities || [], ['superSmart']);
};

_.assign(Hero.prototype, {
    addAbility: function (ability) {
        this.habilities.push(ability);
        this.habilities = _.uniq(this.habilities);
    },
    setSuperStrengh: function () {
        this.addAbility('superStrength');
    },
    setInvisibility: function () {
        this.addAbility('invisibility');
    }
});

/**
 * Decorator
 */
TragicHero = {
    setInvisibility: function () {
        this.addAbility('invisibility');
        this.addAbility('omnipresent');
    },
    setDistortion: function () {
        this.addAbility('elasticity');
    }
};

/**
 * Decorator
 */
AntiHero = {
    setSuperStrengh: function () {
        this.addAbility('superStrength');
        this.addAbility('superflexibility');
    },
    setFaster: function () {
        this.addAbility('superVelocity');
        this.addAbility('omnipresent');
    }
};

module.exports = {
    getHeroConstructor: Hero,  // only for reasons of testing
    getTragicHero: _.partial(extendHero, TragicHero),
    getAntiHero: _.partial(extendHero, AntiHero)
};
