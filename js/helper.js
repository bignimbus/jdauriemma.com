define(['bower_components/moment/min/moment.min.js',
    "../bower_components/handlebars/handlebars"],
function (moment, Handlebars) {
    'use strict';
    Handlebars.registerHelper('format_date', function (input, format) {
        return moment(input, format).fromNow();
    });
    return Handlebars;
});
