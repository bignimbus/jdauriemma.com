define([],
function () {
    'use strict';
    return Backbone.Collection.extend({
        "model": Backbone.Model,
        "url": '../audio/musiclist.php',
        "parse": function (response) {
            response = _.filter(response, function (song) {
                if (song.file.indexOf('.') === 0 || !song.file) {
                    return false;
                }
                return true;
            });
            return response;
        }
    });
});
