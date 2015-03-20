define([], function () {
    'use strict';
    return Backbone.Model.extend({
        "initialize": function () {
            this.setHeroImage();
            this.setTextSnippet();
        },
        "setHeroImage": function () {
            var post = this.get('regular-body'),
                img = post.slice(post.indexOf('<img '));
            img = img.slice(0, img.indexOf('>') + 1);
            this.set('heroImage', img);
        },
        "setTextSnippet": function () {
            var post = this.get('regular-body'),
                text = /<p>((?:.|[\r\n])*?)<\/p>/g.exec(post);
            text = text[1] && text[1].replace(/<(?:.|\n)*?>/gm, '');
            text = text.slice(0, 100) + '...';
            this.set('snippet', text);
        }
    });
});
