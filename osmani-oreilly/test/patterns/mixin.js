'use strict';

describe('Design patterns', function () {
    let _ = require('lodash'),
        expect = require('chai').expect;

    context('Mixin (Creational object pattern)', function () {
        let mixin = require('./../../main/patterns/mixin'), tourist, sport,
            transports = {
                Car: require('./../../main/utils/Car'),
                Vehicle: require('./../../main/utils/Vehicle')
            },
            mockTourism = {
                color: 'yellow',
                model: 'toyota pegasus X654',
                distributor: 'Toyota'
            },
            mockSport = {
                color: 'red',
                model: 'Lexus Y-X564',
                distributor: 'Lexus'
            };

        it('should override single method from prototype inheritance', function (next) {
            mixin.augment(transports.Car, transports.Vehicle, 'changeDistributor');
            sport = new transports.Car(mockSport);
            expect(sport).to.be.instanceof(transports.Car);
            expect(sport).not.to.be.instanceof(transports.Vehicle);
            expect(sport).not.to.respondTo('enableLicence');
            expect(sport).to.respondTo('changeDistributor');
            expect(sport).to.respondTo('getInfo');
            expect(sport.enableLicence).to.be.undefined;
            expect(sport.changeDistributor).to.be.a('function');
            expect(sport.aviableLicence).to.be.undefined;
            expect(sport.distributor).to.be.undefined;
            sport.changeDistributor('Toyota');
            expect(sport.distributor).to.be.equals('Toyota');
            next();
        });

        it('should override all prototype from inheritance', function (next) {
            mixin.augment(transports.Car, transports.Vehicle);
            tourist = new transports.Car(mockTourism);
            expect(tourist).to.be.instanceof(transports.Car);
            expect(tourist).not.to.be.instanceof(transports.Vehicle);
            expect(tourist).to.respondTo('enableLicence');
            expect(tourist).to.respondTo('changeDistributor');
            expect(tourist).to.have.property('color', 'yellow');
            expect(tourist).to.have.property('model', 'toyota pegasus X654');
            expect(tourist.aviableLicence).to.be.undefined;
            expect(tourist.distributor).to.be.undefined;
            tourist.enableLicence(false);
            tourist.changeDistributor('Nissan');
            expect(tourist.aviableLicence).to.be.false;
            expect(tourist.distributor).to.be.equals('Nissan');
            next();
        });

        it('should avoid override from prototype method existing', function (next) {
            expect(_.bindKey(mixin, 'augment', transports.Car, transports.Vehicle, 'unknown')).to.throw(Error, 'could not override method: unknown');
            expect(_.bindKey(mixin, 'augment', transports.Car, transports.Vehicle, 'getInfo')).to.throw(Error, 'could not override method: getInfo');
            next();
        });
    });
});
