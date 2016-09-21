'use strict';

var mediator = ( function () {
    var channels = {};

    // create a channel of comunication (trigger)
    var subscribe = function (channel, handler) {
        if (!channels[channel]) {
            channels[channel] = [];
        }

        channels[channel].push({
            context: this,
            callback: handler
        });

        return this;
    };

    // publish/broadcast  channel/event expecting there are subscribers anywhere (eventLisener)
    var publish = function (channel) {
        var hasChannel = !!channels[channel];

        if (hasChannel) {
            // first argument is te channel, from the second are publish arguments
            var arg = Array.prototype.slice.call(arguments, 1);

            for (var i = 0, len = channels[channel].length; i < len; i++) {
                // for each subscription into channel
                var subscription = channels[channel][i];
                subscription.callback.apply(subscription.context, arg);
            }
        }

        return this;
    };

    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
}() );


// TEST
var person = 'Luke';

mediator.subscribe('nameChange', function (newName) {
    person = newName;
});

console.log(person);
mediator.publish('nameChange', 'David');
console.log(person);