define([
    'views/main',
    'collections/songs', 'collections/tweets', 'collections/github',
    'templates/music', 'templates/social', 'templates/code'
],
function (
    AppView,
    SongCollection, TweetCollection, GithubCollection,
    musicTemplate, socialTemplate, codeTemplate
) {
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
            this.code();
        },

        "blog": function () {
            this.view = this.view || new AppView();
            this.view.loading('Under Construction');
        },

        "code": function () {
            var collection = new GithubCollection();
            this.loadPage({
                "template": codeTemplate,
                "id": "code"
            }, collection);
        },

        "music": function () {
            var collection = new SongCollection();
            this.loadPage({
                "template": musicTemplate,
                "id": "music"
            }, collection);
        },

        "social": function () {
            var collection = new TweetCollection();
            this.loadPage({
                "template": socialTemplate,
                "id": "social"
            }, collection);
        },

        "loadPage": function (opts, collection, message) {
            opts = opts || {};

            this.view = new AppView(opts);
            this.view.loading();

            var success = _.bind(function () {
                this.view.render(collection);
            }, this);
            collection.fetch({
                "success": success
            });
        }
    });
});
