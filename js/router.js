define(['views/main', 'models/song', 'collections/songs'],
function (AppView, SongModel, SongCollection) {
    'use strict';

    return Backbone.Router.extend({
        "routes": {
            '': 'defaultRoute',
            'blog': 'blog',
            'code': 'code',
            'music': 'music',
            'social': 'social'
        },

        "view": null,

        "initialize": function (options, model) {
            this.options = options || {};
        },

        "defaultRoute": function () {
            this.music();
        },

        "blog": function () {

        },

        "code": function () {

        },

        "music": function () {
            var collection = new SongCollection();
            collection.fetch();
            // this.view = new AppView({
            //     "model": 
            // });
        },

        "social": function () {

        }
    });
});
