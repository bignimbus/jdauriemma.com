define([], function () {
    'use strict';

    return Backbone.Router.extend({
        "routes": {
            '': 'defaultRoute'
        },

        "initialize": function (options, model) {
            this.options = options || {};
            this.model = options.model;
        },

        "defaultRoute": function () {

        }
    });
});
