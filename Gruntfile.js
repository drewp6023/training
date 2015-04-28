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

		//JSHint
		jshint: {
			files: ['app/**/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});

	grunt.registerTask('default', []);
};