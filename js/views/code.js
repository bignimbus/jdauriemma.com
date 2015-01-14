define(['views/main'],
function (AppView) {
    'use strict';
    return AppView.extend({
        "initialize": function (options) {
            this.template = options.template;
        },
        "render": function () {
            this.$el.html(this.template(this.getContext()));
        },
        "getContext": function () {
            return {
                "repos": this.repoCollection.toJSON(),
                "gists": this.gistCollection.toJSON()
            };
        }
    });
});
