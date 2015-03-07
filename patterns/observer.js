// PUBLISHER - BROADCASTING
$(window.obj).trigger('channel', [{arg1: 1, arg2: 2}, "arg3"]);

// SUBSCRIBE - LISTEN
$(window.obj).on('channel', 'handler', this);
$(window.obj).off('channel');

// SAMPLE PUB/SUBS IMPLEMENTATION
var publisher = {};
 
( function observerInterface ( p ){
    
    var channels = {},
        subUid = -1;

    // publish events apssing data 
    p.publish = function ( channel, args ){
        var subscriber = channels[ channel ],
            // assign next las channel ID, if where tranking
            numChannel = subscriber ? subscriber.length : 0;

        // check discharge event tracking
        if( numChannel === 0 ) return false;

        while( numChannel-- > 0 ){
            subscriber[ numChannel ].func( channel, args );
        }

        return this;
    };

    // subscribe events, to be executef when the channel/event is observed
    p.subscribe = function( channel, handler ){
        var subscriber = channels[ channel ],
            tokenChannel = (++subUid).toString();

        // subscribe it, if theres no tracking yet
        if( !subscriber ){
            subscriber = [];
        }

        subscriber.push({
            tokenChannel: tokenChannel, // token channel
            func: handler
        });

        return tokenChannel;
    };

    // unsubscribe from specific chennel, based on tokenized channel
    p.unsubscribe = function( token ){
        for ( var subs in channels ) {

            if( channels.hasOwnProperty(subs) ){
                
                var subscribers = channels[subs];
                for (var i = 0, len = subscribers.length ; i < len; i++) {
                    if (subscribers[i].tokenChannel === token) {
                        subscribers[i].split(i, 1);
                        return token;
                    }
                }
            }
        }
    };
}( publisher ) );