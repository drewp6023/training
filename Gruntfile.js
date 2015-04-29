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
		    js: {    // You need a task, can be any string
			    options: {
			        //livereloadOnError: false
			    },
			    tasks: ['jshint'],		    	
		        files: [   // Files to livereload on
		            "app/**/*.js",
		        ]
		    },
		    html: {	    	
		        files: [   // Files to livereload on
		            "index.html",
		            "app/**/*.html"
		        ]
		    },
		    css: {    	
		        files: [   // Files to livereload on
		            "app/styles/*.css"
		        ]
		    },
		    gruntfile: {
		    	files: 'Gruntfile.js',
		    	tasks: ['jshint']
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

		notify_hooks: {
			options: {
				enabled: true,
				max_js_hint_notifications: 5
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

	// Grunt events
	// grunt.event.on('watch', function(action, filepath, target) {
	// 	grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	// });

	grunt.registerTask('default', []);
	grunt.registerTask('server', [
		'jshint',
		'open', 
		'connect:server', 
		'watch',
		'notify_hooks'
	]);
};