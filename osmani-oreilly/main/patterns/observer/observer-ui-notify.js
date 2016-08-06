( function (ps) {
    'use strict';

    // there are stock stats and counter for updating from data model.
    // when the data model is updating, the grid and counter views make too

    var grid = ( function () {
        var getCurrentime = function () {
            var date = new Date(),
                m = date.getMonth() + 1,
                d = date.getDate(),
                y = date.getFullYear(),
                t = date.toLocaleTimeString().toLowerCase();
            return (m + '/' + d + '/' + y + '/' + t);
        };

        return {
            refreshData: function () {
                console.log('fetch data model');
                console.log('Update grid component wiyh new pull data');
            },
            updateCounter: function () {
                console.log('Data last updated : ' + getCurrentime());
            }
        };
    }());

    // Mediator : event subscribed for observer data - grid
    var gridUpdate = function () {
        grid.refreshData();
        grid.updateCounter();
    };

    // Load Observer : observer-test.js
    ps.subscribe('fetchDataModel', gridUpdate);

    // Now we are realized there is new stock
    ps.publish('fetchDataModel');

}(window.pubsub || {})); // Loose Augmentation