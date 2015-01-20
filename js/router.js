define([
    'views/main', 'views/blog',
    'collections/songs', 'collections/tweets', 'collections/blog-posts',
    'models/github',
    'templates/music', 'templates/social', 'templates/code'
],
function (
    AppView, BlogView,
    SongCollection, TweetCollection, BlogCollection,
    GithubModel,
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
            var collection = new BlogCollection();
            this.loadPage({
                "collection": collection,
                "id": "blog"
            }, BlogView);
        },

        "code": function () {
            var model = new GithubModel();
            this.loadPage({
                "model": model,
                "template": codeTemplate,
                "id": "code"
            });
        },

        "music": function () {
            var collection = new SongCollection();
            this.loadPage({
                "model": collection,
                "template": musicTemplate,
                "id": "music"
            });
        },

        "social": function () {
            var collection = new TweetCollection();
            this.loadPage({
                "model": collection,
                "template": socialTemplate,
                "id": "social"
            });
        },

        "archive": function () {

        },

        "loadPage": function (opts, View) {
            opts = opts || {};
            View = View || AppView;
            var success,
                data = opts.model || opts.collection || null;

            this.view = new View(opts);
            this.view.loading();

            success = _.bind(function () {
                this.view.render();
            }, this);
            data.fetch({
                "success": success
            });
        }
    });
});
