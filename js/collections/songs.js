define(['models/song'],
function (SongModel) {
    'use strict';
    return Backbone.Collection.extend({
        "model": Backbone.Model,
        "url": '../php/data/music.json',
        "parse": function (response) {
            debugger;
            console.log(response);
            return response;
        }
    });
});
