require.config({
    "baseUrl": "./js/"
});
require(['router', 'views/nav'],
function (Router, NavigationView) {
    'use strict';
    var app = {},
        navbar = new NavigationView(),
        opts = {"pushState": true};

    if (window.rootDir.indexOf('home') > -1) {
        $.extend(opts, {"root": window.rootDir});
    }
    app.router = new Router();
    Backbone.history.start({"pushState": true, "root": window.rootDir});
    $(document).on('click', 'a:not([data-bypass])', function (evt) {
        var href = $(this).attr('href'),
            protocol = this.protocol + '//';
        if (href.slice(protocol.length) !== protocol) {
            evt.preventDefault();
            app.router.navigate(href, true);
        }
    });
    return app.router;
});
