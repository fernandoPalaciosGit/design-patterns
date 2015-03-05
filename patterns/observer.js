// PUBLISHER - BROADCASTING
$(obj).trigger('channel', [{arg1: 1, arg2: 2}, "arg3"]);

// SUBSCRIBE - LISTEN
$(obj).on('channel', handler, this);
$(obj).off('channel');