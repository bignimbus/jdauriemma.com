define(['views/main', 'templates/single-post', 'templates/blog-list', 'router'],
function (AppView, singlePostTemplate, blogListTemplate, router) {
    'use strict';
    return AppView.extend({
        "currentPost": null,
        "el": "article",
        "render": function (slug) {
            this.currentPost = this.getPost(slug);
            var prev = this.getPrevious(),
                next = this.getNext();
            this.$el.html(singlePostTemplate($.extend({}, this.currentPost, {
                "prev": prev,
                "next": next
            })));
            this.$el.prop('id', this.id);
        },
        "renderArchive": function () {
            this.$el.html(blogListTemplate($.extend({}, {
                "title": "Archive"
            }, this.collection.toJSON())));
            this.$el.prop('id', this.id);
        },
        "getPost": function (slug) {
            var post = this.collection.findWhere({
                "slug": slug
            }) || this.collection.at(0);
            return post.toJSON();
        },
        "getPrevious": function () {
            var i = this.collection.indexOf(this.collection.findWhere({
                    "slug": this.currentPost.slug
                })),
                post = this.collection.at(i + 1 > this.collection.length - 1 ? 0 : i + 1);
            return 'blog_' + post.get('slug');
        },
        "getNext": function () {
            var i = this.collection.indexOf(this.collection.findWhere({
                    "slug": this.currentPost.slug
                })),
                post = this.collection.at(i <= 0 ? this.collection.length - 1 : i - 1);
            return 'blog_' + post.get('slug');
        }
    });
});
