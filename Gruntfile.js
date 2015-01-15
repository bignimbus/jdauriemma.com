module.exports = function (grunt) {
    grunt.initConfig({
        "less": {
            "development": {
                "files": {
                    "styles/style.css": "styles/style.less"
                }
            }
        },
        "handlebars": {
            "options": {
                "namespace": false,
                "amd": [
                    "helper"
                ]
            },
            "files": {
                "expand": true,
                "src": ['js/templates/*.hbs'],
                "ext": '.js'
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
                    "port": 5000,
                    "keepalive": true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-php');
    grunt.registerTask('default', ['less', 'handlebars', 'php']);
};
