define([], function () {
    'use strict';
    return Backbone.Model.extend({
        "url": 'php/data/github.json',
        "parse": function (response) {
            return response;
        }
    });
});
