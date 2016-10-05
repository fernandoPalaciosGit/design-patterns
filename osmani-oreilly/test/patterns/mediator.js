'use strict';

describe('Design patterns', function () {
    let expect = require('chai').expect;

    context('Mediator (Behaviour Object pattern)', function () {
        let extendObserver = require('./../../main/patterns/mediator'),
            mediator, person;

        before(function () {
            mediator = {};
            person = null;
            extendObserver(mediator);
        });

        it('should define a callback interface from publish/subscriber to change behaviour object', function (next) {
            expect(person).to.be.null;
            mediator.subscribe('setpersonalname', function (name) {
                person = name;
            });
            mediator.publish('setpersonalname', 'federico');
            expect(person).to.be.equals('federico');
            next();
        });
    });
});
