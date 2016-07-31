// PUBLISHER - BROADCASTING
$(window.obj).trigger('channel', [{arg1: 1, arg2: 2}, "arg3"]);

// SUBSCRIBE - LISTEN
$(window.obj).on('channel', 'handler', this);
$(window.obj).off('channel');

// SAMPLE PUB/SUBS IMPLEMENTATION
var pubsub = {};
 
( function observerInterface ( pb ){
    
    var channels = {},
        subUid = -1;

    // publish events apssing data 
    pb.publish = function ( channel, args ){
        var subscriber = channels[ channel ],
            // assign next las channel ID, if where tranking
            numChannel = subscriber ? subscriber.length : 0;

        // check discharge event tracking
        if( numChannel === 0 ) return false;

        while( numChannel-- > 0 ){
            channels[ channel ][ numChannel ].func( channel, args );
        }

        return this;
    };

    // subscribe events, to be executef when the channel/event is observed
    pb.subscribe = function( channel, handler ){
        var subscriber = channels[ channel ],
            tokenChannel = (++subUid).toString();

        // subscribe it, if theres no tracking yet
        if( !subscriber ){
            channels[ channel ] = [];
        }

        channels[ channel ].push({
            tokenChannel: tokenChannel, // token channel
            func: handler
        });

        return tokenChannel;
    };

    // unsubscribe from specific chennel, based on tokenized channel
    pb.unsubscribe = function( token ){
        for ( var subs in channels ) {

            if( channels.hasOwnProperty(subs) ){
                
                var subscribers = channels[subs];
                for (var i = 0, len = subscribers.length ; i < len; i++) {
                    if (subscribers[i].tokenChannel === token) {
                        channels[subs].splice(i, 1);
                        return token;
                    }
                }
            }
        }
    };
}( pubsub ) );

// TEST : publish and subscribe events
var eventHandler = function( channel, data ){
    console.log(channel, data);
};

// subscribe ~~ listen
// once they have been notificated, functions are invoked
var testSubsTokenChannel = pubsub.subscribe( "testSubscribe", eventHandler );


// publish notifications about events
pubsub.publish( "testSubscribe", "hello world" );
pubsub.publish( "testSubscribe", ["test", "a", "b"] );
pubsub.publish( "testSubscribe", [{
    "color": "colorTest"
}, {
    "tets": "testing"
}] );

// unsubscribe if you no longet notfication about this action
pubsub.unsubscribe( testSubsTokenChannel );

// now tere is no publish action to testSubscribe
pubsub.publish( "testSubscribe", "Nooooo failed." );