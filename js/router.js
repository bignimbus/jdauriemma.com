define([
    'views/main',
    'collections/songs', 'collections/tweets', 'collections/blog-posts',
    'models/github',
    'templates/music', 'templates/social', 'templates/code', 'templates/blog-post'
],
function (
    AppView,
    SongCollection, TweetCollection, BlogCollection,
    GithubModel,
    musicTemplate, socialTemplate, codeTemplate, blogTemplate
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
                "model": collection,
                "template": blogTemplate,
                "id": "blog"
            });
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

        "loadPage": function (opts, collection, message) {
            opts = opts || {};

            this.view = new AppView(opts);
            this.view.loading();

            var success = _.bind(function () {
                this.view.render();
            }, this);
            opts.model.fetch({
                "success": success
            });
        }
    });
});
