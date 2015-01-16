define(['models/tweet'],
function (TweetModel) {
    'use strict';
    return Backbone.Collection.extend({
        "model": TweetModel,
        "url": 'php/data/twitter.json',
        "parse": function (response) {
            return response;
        }
    });
});
