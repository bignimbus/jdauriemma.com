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
            'blog': 'blogPost',
            'blog_:slug': 'blogPost',
            'archive': 'archive',
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

        "blogPost": function (slug) {
            debugger;
            if (!this.blogCollection || !this.blogView) {
                this.loadBlog(_.bind(function () {
                    this.blogView.render(slug);
                }, this));
            } else {
                this.blogView.loading();
                this.blogView.render(slug);
            }
        },

        "archive": function () {
            if (!this.blogCollection || !this.blogView) {
                this.loadBlog(_.bind(function () {
                    this.blogView.renderArchive();
                }, this));
            } else {
                this.blogView.loading();
                this.blogView.renderArchive();
            }
        },

        "loadBlog": function (success) {
            this.blogCollection = new BlogCollection();
            this.blogView = new BlogView({
                "collection": this.blogCollection,
                "id": "blog",
                "router": this
            });
            this.blogView.loading();
            this.blogCollection.fetch({
                "success": success
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

        "loadPage": function (opts) {
            opts = opts || {};
            var success,
                data = opts.model || opts.collection || null;

            this.view = new AppView(opts);
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
