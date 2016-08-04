( function (ps) {
    'use strict';

    var grid = ( function () {

        return {
            refreshData: function (data) {
                if (!!data) {
                    console.log('New entry: ', data.title);
                }

                return !!data;
            },
            updateCounter: function (timeStamp) {
                console.log('Last updated : ' + timeStamp);
            }
        };
    }());

    // Mediator : Unify event subscribed for observer data - grid
    var gridUpdate = function (channel, data) {
        grid.refreshData(data);
        grid.updateCounter(data.timeStamp);
    };

    // Load Observer : observer-test.js
    ps.subscribe('fetchDataModel', gridUpdate);

    // Now we are realized there is new stock
    ps.publish('fetchDataModel', {
        title: 'Microsoft shares',
        changenet: 4,
        percentage: 33,
        timeStamp: '17:34:12',
    });

    ps.publish('fetchDataModel', {
        title: 'Dell shares',
        changenet: 10,
        percentage: 20,
        timeStamp: '17:35:16',
    });

}(window.pubsub || {})); // Loose Augmentation