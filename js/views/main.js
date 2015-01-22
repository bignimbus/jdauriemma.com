define(['templates/loading', 'router'],
function (loadingTemplate, router) {
    'use strict';
    return Backbone.View.extend({
        "el": "article",
        "id": null,
        "isLoading": false,
        "initialize": function (options) {
            this.router = router;
            this.template = options && options.template;
            this.setBackground();
        },
        "render": function (collection) {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.prop('id', this.id);
        },
        "loading": function (message) {
            this.isLoading = true;
            this.$el.html(loadingTemplate({
                "message": message || "Loading..."
            }));
        },
        "setBackground": function () {
            var $body = $('body');
            if ($body.css('background-image') === 'none') {
                $body.css('background-image', this.getRandomImage());
            }
        },
        "getRandomImage": function () {
            var images = [
                'sky.png',
                'clouds.jpg',
                'retro.jpg',
                'city.png',
                'landscape.jpg'
            ],
            random = Math.floor(Math.random() * images.length);
            return 'url("images/' + images[random] + '")';
        }
    });
});
