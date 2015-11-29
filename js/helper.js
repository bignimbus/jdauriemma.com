define([
    '../bower_components/handlebars/handlebars'
],
function (Handlebars) {
    'use strict';
    Handlebars.registerHelper('format_date', function (input, format) {
        return moment(input, format).fromNow();
    });
    return Handlebars;
});
