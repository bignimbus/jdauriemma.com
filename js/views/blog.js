define(['views/main', 'templates/single-post', 'templates/blog-list'],
function (AppView, singlePostTemplate, blogListTemplate) {
    'use strict';
    return AppView.extend({
        "currentPost": null,
        "el": "article.blog",
        "previousScrollTop": 0,
        "events": {
            "scrolled": "showSocial",
            "click .social-buttons div": "share"
        },
        "render": function (slug) {
            this.currentPost = this.getPost(slug);
            var prev = this.getPrevious(),
                next = this.getNext();
            this.$el.html(singlePostTemplate($.extend({}, this.currentPost, {
                "prev": prev,
                "next": next
            })));
            this.startScrollListener();
        },
        "renderArchive": function (tag) {
            var posts = tag ? this.getPostsWith(tag) : this.collection;
            this.$el.html(blogListTemplate($.extend({}, {
                "title": tag ? "Posts with #" + tag : "Archive"
            }, posts.toJSON())));
        },
        "getPost": function (slug) {
            var post = this.collection.findWhere({
                "slug": slug
            }) || this.collection.at(0);
            return post && post.toJSON();
        },
        "getPostsWith": function (tag) {
            var posts = this.collection.filter(function (model) {
                return _.contains(model.get('tags'), tag);
            });
            return new Backbone.Collection(posts);
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
        },
        "showSocial": function () {
            var $shareBar = this.$('.social-buttons'),
                isVisible = $shareBar.hasClass('show'),
                scrollTop = $('body').scrollTop();
            if (scrollTop > this.previousScrollTop && !isVisible) {
                $shareBar.addClass('show');
            } else if (scrollTop < this.previousScrollTop && isVisible) {
                $shareBar.removeClass('show');
            }
            this.previousScrollTop = scrollTop;
        },
        "share": function (e) {
            var current = window.location.href,
                $target = $(e.target),
                network = $target.closest('div').attr('class');
            window.location.href = {
                "subscribe": "http://jdauriemma.tumblr.com/rss",
                "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + current,
                "tumblr": "http://www.tumblr.com/share/link?url=" + current,
                "reddit": "http://reddit.com/submit?url=" + current,
                "twitter": "http://twitter.com/share?url=" + current
            }[network];
        }
    });
});
