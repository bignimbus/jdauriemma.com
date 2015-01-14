define(['templates/loading'],
function (loadingTemplate) {
    'use strict';
    return Backbone.View.extend({
        "el": "article",
        "id": null,
        "initialize": function (options) {
            this.template = options.template;
        },
        "render": function (collection) {
            this.$el.html(this.template(this.getContext(collection)));
            this.$el.prop('id', this.id);
        },
        "loading": function () {
            this.$el.html(loadingTemplate);
        },
        "getContext": function (collection) {
            collection = collection.toJSON();
            if (_.isArray(collection) && collection.length === 1) {
                return collection[0];
            }
            return collection;
        }
    });
});
