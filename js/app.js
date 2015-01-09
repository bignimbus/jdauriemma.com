require(['router', 'models/main', 'views/main'],
function (Router, ParentModel, ParentView) {
    'use strict';
    var app = {};
    app.model = new ParentModel();
    app.router = new Router({"model": app.model});
    app.view = new ParentView({
        "model": app.model,
        "router": app.router
    });

    Backbone.history.start();

    return app.router;
});
