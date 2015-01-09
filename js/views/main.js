define([],
function () {
    'use strict';
    return Backbone.View.extend({
        "el": "article",
        "render": function () {
            this.$el.html(this.template(this.model.toJSON() || null));
        }
    });
});
