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

        beforeEach(function () {
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

        it('should off subscribe to channels', function (next) {
            expect(STATUS).to.be.false;
            domObject.off(setStatusChannel).off(triggerStatusChannel);
            domObject.trigger(triggerStatusChannel);
            domObject.trigger(setStatusChannel, ['Hello dude']);
            expect(STATUS).to.be.false;
            next();
        });
    });

    context('observer interface test interfaces', function () {
        var pubSub = require('./../../../main/patterns/observer/app.module.observer'),
            createUiLayout = require('./../../../main/patterns/observer/app.module.observer-ui-notify'),
            grid, GRID_DATA = {},
            UPDATE_DATA_CHANNEL = 'updategrid',
            COPY_DATA_CHANNEL = 'copycat';

        before(function () {
            grid = createUiLayout();
            GRID_DATA = null;
            pubSub.subscribe(COPY_DATA_CHANNEL, grid.copyModel);
            pubSub.subscribe(UPDATE_DATA_CHANNEL, grid.update);
        });

        it('should publish, subscribe and unsubscribe channels', function (next) {
            /* jshint maxstatements: 120 */
            pubSub.publish(COPY_DATA_CHANNEL, GRID_DATA);
            console.log('--------------->');
            console.log(GRID_DATA);
            expect(GRID_DATA).to.be.null;
            pubSub.publish(UPDATE_DATA_CHANNEL);
            console.log('--------------->');
            console.log(GRID_DATA);
            expect(GRID_DATA).to.be.null;
            pubSub.publish(COPY_DATA_CHANNEL, GRID_DATA);
            console.log('--------------->');
            console.log(GRID_DATA);
            expect(GRID_DATA).to.be.equals('');
            pubSub.publish(UPDATE_DATA_CHANNEL, {
                status: 'Microsoft shares',
                percentage: 33,
                timer: new Date('11-12-1985')
            });
            expect(GRID_DATA).to.be.equals('');
            pubSub.publish(COPY_DATA_CHANNEL, GRID_DATA);
            console.log(GRID_DATA);
            //expect(GRID_DATA).to.contain('state', '');
            GRID_DATA = null;
            pubSub.unsubscribe(COPY_DATA_CHANNEL);
            pubSub.publish(UPDATE_DATA_CHANNEL);
            pubSub.publish(COPY_DATA_CHANNEL, GRID_DATA);
            expect(GRID_DATA).to.be.null;
            next();
        });
    });
});
