'use strict';

describe('Design patterns', function () {
    var expect = require('chai').expect,
        _ = require('lodash');

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
            timer = require('./../../../main/utils/Timer'),
            localTime = timer.getCurrentTime(),
            trimLocalTime = localTime.substring(0, localTime.lastIndexOf('/')),
            grid, UPDATE_SCHEMA_CHANNEL = 'updategrid', UPDATE_MODEL_CHANNEL = 'copycat';

        beforeEach(function () {
            grid = createUiLayout();
            pubSub.subscribe(UPDATE_MODEL_CHANNEL, _.bind(grid.copyModel, grid));
            pubSub.subscribe(UPDATE_SCHEMA_CHANNEL, _.bind(grid.update, grid));
        });

        afterEach(function () {
            pubSub.unsubscribe(UPDATE_MODEL_CHANNEL);
            pubSub.unsubscribe(UPDATE_SCHEMA_CHANNEL);
        });

        it('should connect module properties by subscribe handlers and publish data', function (next) {
            /* jshint maxstatements: 13 */
            expect(grid).to.have.property('model').to.be.null;
            pubSub.publish(UPDATE_MODEL_CHANNEL);
            expect(grid.model).to.be.null;
            pubSub.publish(UPDATE_SCHEMA_CHANNEL);
            expect(grid.model).to.be.null;
            pubSub.publish(UPDATE_MODEL_CHANNEL);
            expect(grid.model).to.contain('Last updated<-->');
            expect(grid.model).to.contain(trimLocalTime);
            pubSub.publish(UPDATE_SCHEMA_CHANNEL, {
                status: 'Microsoft shares',
                percentage: 33,
                timer: new Date(1985, 12, 11)
            });
            pubSub.publish(UPDATE_MODEL_CHANNEL);
            expect(grid.model).to.contain('Microsoft shares<-->');
            expect(grid.model).to.contain(new Date(1985, 12, 11));
            next();
        });

        it('should stop publish data propagation', function (next) {
            pubSub.unsubscribe(UPDATE_MODEL_CHANNEL);
            pubSub.publish(UPDATE_SCHEMA_CHANNEL);
            pubSub.publish(UPDATE_MODEL_CHANNEL);
            expect(grid.model).to.be.null;
            pubSub.subscribe(UPDATE_MODEL_CHANNEL, _.bind(grid.copyModel, grid));
            pubSub.publish(UPDATE_MODEL_CHANNEL);
            expect(grid.model).to.contain('Last updated<-->');
            expect(grid.model).to.contain(trimLocalTime);
            next();
        });
    });
});
