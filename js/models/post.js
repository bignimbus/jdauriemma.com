define([], function () {
    'use strict';
    return Backbone.Model.extend({
        "initialize": function () {
            this.initLazyLoad();
            this.setHeroImage();
            this.setTextSnippet();
        },
        "initLazyLoad": function () {
            var post = this.get('regular-body'),
                lazyImgs = post.replace(/\<img(.*)src\s?=\s?"(.*)"(.*)\>/ig, '<img$1data-original="$2"$3>');
            this.set('regular-body', lazyImgs);
        },
        "setHeroImage": function () {
            var post = this.get('regular-body'),
                img = post.slice(post.indexOf('<img '));
            img = img.slice(0, img.indexOf('>') + 1);
            this.set('heroImage', img);
        },
        "setTextSnippet": function () {
            var post = this.get('regular-body'),
              text = $('<div>' + post + '</div>').children('p').text();
            text = text.replace(/[\r\n]/g, ' ').slice(0, 100) + '...';
            this.set('snippet', text);
        }
    });
});
