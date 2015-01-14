define([],
function () {
    'use strict';
    return Backbone.Collection.extend({
        "model": Backbone.Model,
        "url": '../php/data/music.json',
        "parse": function (response) {
            response = _.filter(response, function (song) {
                if (song.file.indexOf('.') === 0) {
                    return false;
                }
                return true;
            });
            return response;
        }
    });
});
