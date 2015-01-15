define(['../bower_components/moment/min/moment.min.js'],
function (moment) {
    'use strict';
    return Backbone.Model.extend({
        "parse": function (response) {
            response.photos = response.entities.media ?
                _.where(response.entities.media, {
                    "type": "photo"
                }) : null;
            response.originalUser = response.retweeted ?
                response.retweeted_status.user
                : response.user;
            return response;
        }
    });
});
