'use strict';

var _ = require('lodash'),
    getCurrentime = function () {
        var date = new Date(),
            m = date.getMonth() + 1,
            d = date.getDate(),
            y = date.getFullYear(),
            t = date.toLocaleTimeString().toLowerCase();
        return (m + '/' + d + '/' + y + '/' + t);
    },
    checkEsquemaPopulate = function (args) {
        return _.chain(args).compact().isEmpty().value();
    },
    buildModel = function () {
        return checkEsquemaPopulate(arguments) ? '\n' + _.join(arguments, '<->') : null;
    },
    Schema = {
        state: null,
        timer: null
    };

var Grid = function (options) {
    if (checkEsquemaPopulate(arguments)) {
        Schema.state = options.state;
        Schema.timer = options.timer;
    }
};

_.assign(Grid.prototype, {
    refreshData: function (state) {
        Schema.state = buildModel(
            !_.isUndefined(state) ? state : 'Last updated ',
            'Update grid component with new pull data',
            getCurrentime()
        );
    },
    updateCounter: function (timer) {
        Schema.timer = buildModel(
            'Data updated : ',
            _.isDate(timer) ? timer : getCurrentime()
        );
    },
    update: function (model) {
        var data = _.isUndefined(model) ? {} : model;
        this.refreshData(data.state);
        this.updateCounter(data.timer);
    },
    // test proposals
    copyModel: function (reference) {
        reference = buildModel(Schema.state, Schema.timer);
    }
});

module.exports = function (options) {
    return new Grid(options || {});
};