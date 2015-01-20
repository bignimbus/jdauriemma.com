define(['views/main', 'templates/single-post', 'templates/blog-list'],
function (AppView, singlePostTemplate, blogListTemplate) {
    'use strict';
    return AppView.extend({
        "render": function () {
            this.$el.html(singlePostTemplate(this.collection.at(0).toJSON()));
        },
        "renderArchive": function () {
            this.$el.html(blogListTemplate(this.collection.toJSON()));
        }
    });
});
