'use strict';

describe('Design patterns', function () {
    context('decorator interface by jquery extend', function () {
        var enchantress, joker,
            _ = require('lodash'),
            expect = require('chai').expect,
            decoratorHero = require('./../../../main/patterns/decorator/app.module.jquery-decorator');

        before(function () {
            enchantress = decoratorHero.getTragicHero({name: 'enchantress'});
            joker = decoratorHero.getAntiHero({name: 'joker'});
        });

        it('should create simple object', function (next) {
            expect(enchantress).not.to.be.an.instanceof(decoratorHero.getHeroConstructor);
            expect(enchantress).to.be.an.instanceof(Object);
            next();
        });

        it('should extend and override properties to object', function (next) {
            var heroProperties = _.pull(_.keysIn(decoratorHero.getHeroConstructor.prototype), 'constructor');

            expect(_.keys(enchantress)).to.include.members(heroProperties);
            next();
        });

        it('should create new behaviour by extending properties', function (next) {
            expect(_.sortBy(enchantress.habilities)).to.deep.equal(_.sortBy(['superSmart']));
            enchantress.setInvisibility();
            enchantress.setDistortion();
            enchantress.setSuperStrengh();
            expect(_.sortBy(enchantress.habilities)).to.deep.equal(_.sortBy(['superSmart', 'invisibility', 'omnipresent', 'elasticity', 'superStrength']));

            expect(_.sortBy(joker.habilities)).to.deep.equal(_.sortBy(['superSmart']));
            joker.setFaster();
            joker.setInvisibility();
            expect(_.sortBy(joker.habilities)).to.deep.equal(_.sortBy(['superSmart', 'superVelocity', 'omnipresent', 'invisibility']));
            next();
        });
    });
});
