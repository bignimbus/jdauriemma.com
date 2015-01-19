require.config({
    "baseUrl": "js/"
});
require(['router', 'views/nav'],
function (Router, NavigationView) {
    'use strict';
    var app = {},
        navbar = new NavigationView();
    app.router = new Router();
    Backbone.history.start();
    return app.router;
});
