var pushState = require('connect-pushstate'),
    rewrite = require('connect-modrewrite'),
    rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;
module.exports = function (grunt) {
    grunt.initConfig({
        "uglify": {
            "my_target": {
                "files": {
                    "dist/app.min.js": ["dist/app.js"]
                }
            }
        },
        "less": {
            "development": {
                "files": {
                    "styles/style.css": "styles/main.less"
                }
            }
        },
        "handlebars": {
            "options": {
                "namespace": false,
                "amd": [
                    "../helper"
                ],
                "partialRegex": /.*/,
                "partialsPathRegex": /js\/partials\//
            },
            "files": {
                "expand": true,
                "src": ['js/templates/*.hbs'],
                "ext": '.js'
            }
        },
        "requirejs": {
            "main": {
                "options": {
                    'findNestedDependencies': true,
                    'baseUrl': 'js',
                    'optimize': 'none',
                    'include': ['app.js'],
                    'out': 'dist/app.js',
                    'onModuleBundleComplete': function (data) {
                        var fs = require('fs'),
                        amdclean = require('amdclean'),
                        outputFile = data.path;

                        fs.writeFileSync(outputFile, amdclean.clean({
                            'filePath': outputFile
                        }));
                    }
                }
            }
        },
        "connect": {
            "server": {
                "rules": [
                    // Internal rewrite
                    {"from": '^/', "to": './'}
                    // Internal rewrite
                    // {"from": '^/js/(.*)$', "to": '/src/js/$1'},
                ],
                "options": {
                    "hostname": 'localhost',
                    // "port": 3000,
                    "base": '.',
                    "debug": true,
                    "keepalive": true,
                    "middleware": function(connect, options, middlewares) {

                        // the rules that shape our mod-rewrite behavior
                        var middlewares = [];

                        // RewriteRules support
                        middlewares.push(rewriteRulesSnippet);

                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        var directory = options.directory || options.base[options.base.length - 1];
                        options.base.forEach(function (base) {
                            // Serve static files.
                            middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able.
                        middlewares.push(connect.directory(directory));

                        return middlewares;
                    }
                }
            }
        },
        // "jasmine": {
        //     "pivotal": {
        //         "src": 'src/*.js',
        //         "options": {
        //             "specs": 'tests/*.spec.js',
        //             "version": "2.0.4",
        //             "template": require('grunt-template-jasmine-requirejs'),
        //             "templateOptions": {
        //                 "requireConfigFile": 'config/config.js'
        //             }
        //         }
        //     }
        // },
        "php": {
            "dist": {
                "options": {
                    "port": 5001,
                    "keepalive": true,
                    "base": "./"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'handlebars', 'requirejs', 'uglify', 'php']);
};
