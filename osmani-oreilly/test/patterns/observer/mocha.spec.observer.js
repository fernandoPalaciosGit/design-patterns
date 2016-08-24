'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect;

    context('Observer with jquery interfaces', function () {
        var $ = require('jquery'),
            STATUS,
            triggerStatusChannel = 'channel.triggerstatus',
            setStatusChannel = 'channel.setstatus',
            triggerStatus = function () {
                STATUS = !STATUS;
            },
            setStatus = function (event, status) {
                STATUS = status;
            },
            domObject = $('#coverage-tdd--dom-test');

        beforeEach(function(){
            STATUS = false;
        });

        it('should subscribe a handler to an event with channels', function (next) {
            expect(domObject.get(0)).to.be.an.instanceof(Element);
            domObject.on(triggerStatusChannel, triggerStatus);
            domObject.on(setStatusChannel, setStatus);
            next();
        });

        it('should publish an event', function (next) {
            expect(STATUS).to.be.false;
            domObject.trigger(triggerStatusChannel);
            expect(STATUS).to.be.true;
            next();
        });

        it('should publish a event with data transfer to subscribers', function (next) {
            expect(STATUS).to.be.false;
            domObject.trigger(setStatusChannel, ['Hello dude']);
            expect(STATUS).to.be.equals('Hello dude');
            next();
        });

        it('should off subscribe to channels', function(next) {
            expect(STATUS).to.be.false;
            domObject.off(setStatusChannel).off(triggerStatusChannel);
            domObject.trigger(triggerStatusChannel);
            domObject.trigger(setStatusChannel, ['Hello dude']);
            expect(STATUS).to.be.false;
            next();
        });
    });
});
