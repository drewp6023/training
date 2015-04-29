module.exports = function(grunt) {
	// Load grunt tasks
	require('load-grunt-tasks')(grunt);

	// Project Configuration
	grunt.initConfig({
		// Grun task config
		wiredep: {
			app: {
				src: 'index.html'
			},
			options: {
				dependencies: true,
				devDependencies: true,
				exclude: ['/jquery/', '/bootstrap/dist/js/']
			}
		},

		watch: {
		    options: {
		        livereload: true
		    },
		    taskName: {    // You need a task, can be any string
		        files: [   // Files to livereload on
		            "app/**/*.js",
		            "index.html",
		            "app/**/*.html",
		            "app/styles/*.css"
		        ]
		    }
		},

		connect: {
		    server: {
		        options: {
		            port: 8080,
		            livereload: true
		        }
		    }
		},

		// grunt-open will open your browser at the project's URL
		open: {
		  all: {
		    // Gets the port from the connect configuration
		    path: 'http://localhost:8080/#/>'
		  }
		},

		//JSHint
		jshint: {
			files: ['app/**/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});

	grunt.registerTask('default', []);
	grunt.registerTask('server', ['open', 'connect', 'watch']);
};