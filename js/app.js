require.config({
    "baseUrl": "js/"
});
require(['router'],
function (Router) {
    'use strict';
    var app = {};
    app.router = new Router();
    Backbone.history.start();
    return app.router;
});
