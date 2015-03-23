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
            'latest': 'blogPost',
            'blog_:slug': 'blogPost',
            'archive_:tag': 'archive',
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
            this.blogPost();
        },

        "blogPost": function (slug) {
            this.loadBlog(_.bind(function () {
                if (!slug) {
                    this.navigate('blog_' + this.blogCollection.at(0).get('slug'), {"trigger": false});
                }
                this.view.render(slug);
            }, this));
        },

        "archive": function (tag) {
            this.loadBlog(_.bind(function () {
                this.view.renderArchive(tag);
            }, this));
        },

        "loadBlog": function (success) {
            if (!this.blogCollection) {
                this.blogCollection = new BlogCollection();
            }
            if (this.view) {
                $(document).off();
            }
            this.view = new BlogView({
                "collection": this.blogCollection,
                "id": "blog",
                "router": this
            });
            this.view.loading();
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

            if (this.view) {
                $(document).off();
            }
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
