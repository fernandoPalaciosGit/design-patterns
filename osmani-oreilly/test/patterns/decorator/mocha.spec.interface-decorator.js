'use strict';

describe('Design patterns', function () {
    var user,
        _ = require('lodash'),
        expect = require('chai').expect,
        decorator = require('./../../../main/patterns/decorator/app.module.interface-decorator');

    context('decorator objects', function () {
        beforeEach(function () {
            user = decorator.getUser({name: 'Fernando'});
        });

        it('should extend properties from instance', function (next) {
            expect(user).to.have.property('name', 'Fernando');
            user.remember();
            expect(user.say()).to.have.string('User: Fernando');

            user = decorator.getUserGeolocated(user, {street: 'La Vileta', city: 'Palma de Mallorca'});
            user.remember();
            expect(user.say()).to.have.string('User: Fernando, La Vileta, Palma de Mallorca');
            next();
        });

        it('should throw error when try to decorate invalid prototype', function (next) {
            expect(_.partial(_.bind(decorator.getUserGeolocated, decorator), {})).to.throw(TypeError);
            next();
        });
    });

    context('decorator objects by interface', function () {

    });
});
