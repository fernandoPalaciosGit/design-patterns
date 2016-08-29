'use strict';

var _ = require('lodash'),
    observer = {},
    channels = [];

observer.publish = function (channel, data) {
    var subscriber = channels[channel],
        nextChannel = subscriber ? subscriber.length : null;

    if (!_.isNull(nextChannel)) {
        while (nextChannel-- > 0) {
            channels[channel][nextChannel].func(data);
        }

        return this;
    }
};

observer.subscribe = function (channel, handler) {
    var subscriber = channels[channel];

    if (!subscriber) {
        channels[channel] = [];
    }

    channels[channel].push({
        tokenChannel: channel,
        func: handler
    });
};

observer.unsubscribe = function (token) {
    _.forOwn(channels, function (subscribers, channel) {
        _.each(subscribers, function (subscriber) {
            if (subscriber.tokenChannel === token) {
                delete channels[channel];
                return token;
            }
        });
    });
};

module.exports = observer;
