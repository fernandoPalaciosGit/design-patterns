'use strict';

var _ = require('lodash'),
    validation = require('./../../utils/Validation'),
    printer = require('./../../utils/Output').getPrinter,
    dateTimer = require('./../../utils/Timer'),
    Schema = {
        status: null,
        timer: null
    };

var Grid = function (options) {
    if (validation.hasEmptyFields(arguments)) {
        Schema.status = options.status;
        Schema.timer = options.timer;
    }

    this.model = null;
};

_.assign(Grid.prototype, {
    refreshData: function (status) {
        Schema.status = printer.joinFields(
            !_.isUndefined(status) ? status : 'Last updated',
            'Update grid component with new pull data'
        );
    },
    updateCounter: function (timer) {
        Schema.timer = printer.joinFields(
            'Data updated',
            _.isDate(timer) ? timer : dateTimer.getCurrentime()
        );
    },
    update: function (model) {
        var data = _.isUndefined(model) ? {} : model;
        this.refreshData(data.status);
        this.updateCounter(data.timer);
    },
    copyModel: function () {
        this.model = printer.joinFields(Schema.status, Schema.timer);
    }
});

module.exports = function (options) {
    return new Grid(options || {});
};