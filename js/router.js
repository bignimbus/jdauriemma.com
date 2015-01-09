define([], function () {
    'use strict';

    return Backbone.Router.extend({
        "routes": {
            '': 'defaultRoute',
            'blog': 'blog',
            'code': 'code',
            'music': 'music',
            'social': 'social'
        },

        "initialize": function (options, model) {
            this.options = options || {};
            this.model = options.model;
        },

        "defaultRoute": function () {
            this.blog();
        },

        "blog": function () {
            this.model.set("state", "blog");
        },

        "code": function () {
            this.model.set("state", "code");
        },

        "music": function () {
            this.model.set("state", "music");
        },

        "social": function () {
            this.model.set("state", "social");
        }
    });
});
