define([],
function () {
    'use strict';
    return Backbone.Collection.extend({
        "model": Backbone.Model,
        "url": 'php/data/github.json',
        "parse": function (response) {
            // todo: assign context from here to the view
            // call this context on the view
            // also, use moment
            // idea: moment as a hbs helper?
            return response;
        }
    });
});
