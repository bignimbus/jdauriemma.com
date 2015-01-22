define(['models/post'],
function (PostModel) {
    'use strict';
    return Backbone.Collection.extend({
        "model": PostModel,
        "url": 'php/data/tumblr.json',
        "parse": function (response) {
            return response.posts;
        }
    });
});
