'use strict';
module.exports = function(grunt) {

	var config = {
		dir: {
			source_js: 'src/main/js',
			build: 'target',
			build_vendor: 'target/vendor',
			output: 'target/classes/static'
		},
		vendor: {
			js: [
				'target/traceur_runtime.js',
				'bower_components/angular/angular.js',
				'bower_components/angular-ui-router/release/angular-ui-router.js'
			]
		}
	};

	grunt.initConfig({
		config: config,
		pkg: grunt.file.readJSON('package.json'),
		traceur: {
			options: {
				experimental: true,
      			moduleNames: false,
      			copyRuntime: '<%= config.dir.build %>'
			},
			app: {
				files: [{
					expand: true,
					cwd: '<%= config.dir.build %>',
					src: ['kudobox.js'],
					dest: '<%= config.dir.output %>/'
				}]
			}
		},
		concat: {
			options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n',
					separator: '\n'
			},
			vendor: {
				src: ['<%= config.vendor.js %>'],
				dest: '<%= config.dir.output %>/vendor.js'
			},
			app_js: {
				src: '<%= config.dir.source_js %>/**/*.js',
				dest: '<%= config.dir.build %>/kudobox.js'
			}
		},
		watch: {
			concat_app: {
				files: [ 'Gruntfile.js', 'src/main/js/**/*.{html,css,js,js6,scss}', 'src/main/resources/static/**/*.{html,css,js,js6,scss}' ],
				tasks: [ 'build' ]
			},
			livereload: {
				files: [ 'src/main/resources/static/**/*.{html,css,js}' ],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-traceur');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['concat', 'traceur']);
	grunt.registerTask('serve', ['build', 'watch']);

	grunt.registerTask('default', ['build']);

};