define([
    'templates/blog', 'templates/music', 'templates/code', 'templates/social'
],
function (
    blogTemplate, musicTemplate, codeTemplate, socialTemplate
) {
    'use strict';
    return Backbone.View.extend({
        "el": "article",

        "templates": {
            "blog": blogTemplate,
            "music": musicTemplate,
            "code": codeTemplate,
            "social": socialTemplate
        },

        "initialize": function (options) {
            options = options || {};
            this.router = options.router;
            this.model.on('change:state', this.render, this);
        },

        "render": function () {
            var state = this.model.get('state');
            this.template = this.templates[state];
            this.$el.html(this.template());
        }
    });
});
