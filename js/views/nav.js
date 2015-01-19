define(['templates/nav'],
function (navTemplate) {
    'use strict';
    return Backbone.View.extend({
        "el": "#navbar",
        "events": {
            'click .menuitem': 'toggleActive'
        },
        "initialize": function () {
            this.render();
        },
        "render": function () {
            this.$el.html(navTemplate);
        },
        "toggleActive": function (e) {
            this.$('.menuitem').removeClass('active');
            this.$(e.currentTarget.hash).addClass('active');
        }
    });
});
