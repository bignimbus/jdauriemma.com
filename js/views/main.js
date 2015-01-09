define([
    'templates/blog', 'templates/music', 'templates/code', 'templates/social'
],
function (
    blogTemplate, musicTemplate, codeTemplate, socialTemplate
) {
    'use strict';
    return Backbone.View.extend({
        "el": "article",
        "template": blogTemplate,

        "initialize": function () {
            this.render();
        },

        "render": function () {
            this.$el.html(this.template());
        }
    });
});
