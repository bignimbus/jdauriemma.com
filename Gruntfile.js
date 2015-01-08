module.exports = function (grunt) {
    grunt.initConfig({
        "less": {
            "module": {
                "options": {
                    "paths": ['styles']
                },
                "files": [{
                    "expand": true,
                    "cwd": 'less/modules/',
                    "src": ["**/*.less"],
                    "dest": 'css/modules',
                    "ext": ".css"
                }]
            },
            "specifiedModule": {
                "options": {
                    "paths": ['less']
                },
                "files": [{
                    "expand": true,
                    "cwd": 'less/modules/',
                    "src": ["**/*.less"],
                    "dest": 'css/modules',
                    "ext": ".css"
                }]
            }
        },
        "handlebars": {
            "options": {
                "namespace": false,
                "amd": true
            },
            "files": {
                "expand": true, // Enable dynamic expansion.
                "cwd": 'handlebars/', // Src matches are relative to this path.
                "src": ['**/*.hbs'], // Actual pattern(s) to match.
                "dest": 'templates', // Destination path prefix.
                "ext": '.js' // Dest filepaths will have this extension.
            },
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
    grunt.registerTask('default', ['php']);
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-php');
};
