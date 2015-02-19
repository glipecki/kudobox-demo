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
				'bower_components/angular-animate/angular-animate.js',
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
      			moduleNames: true,
      			copyRuntime: '<%= config.dir.build %>',
      			moduleNaming: {
      				stripPrefix: 'target/compiled-js'
      			}
			},
			app: {
				files: [{
					expand: true,
					cwd: '<%= config.dir.source_js %>',
					src: ['**/*.js'],
					dest: '<%= config.dir.build %>/compiled-js/'
				}]
			}
		},
		concat: {
			options: {
					stripBanners: true,
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n',
					separator: '\n',
					process: function(src, filepath) {
						return src.replace(/(^|\n)(|\t)*(\/\/# sourceURL=)(.*)($|\n)/gi, '\n// from file: $4');
					}
			},
			vendor: {
				src: ['<%= config.vendor.js %>'],
				dest: '<%= config.dir.output %>/vendor.js'
			},
			app_js: {
				src: '<%= config.dir.build %>/compiled-js/**/*.js',
				dest: '<%= config.dir.output %>/kudobox.js'
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'src/main/js/',
				src: '**/*.html',
				dest: '<%= config.dir.output %>'
			}
		},
		watch: {
			concat_app: {
				files: [ 'Gruntfile.js', 'src/main/js/**/*.{html,css,js,js6,scss}', 'src/main/resources/static/**/*.{html,css,js,js6,scss}' ],
				tasks: [ 'build' ]
			},
			livereload: {
				files: [ 'src/main/resources/static/**/*.{html,css,js}', '<%= config.dir.output %>/**/*.{html,css,js}' ],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			proxies: [ {
				context: '/api',
				host: '127.0.0.1',
				port: 8080,
				ws: true,
				rewrite: {
					'^/api': '/api'
				}
			} ],
			server: {
				options: {
					port: 9000,
					base: '<%= config.dir.output %>',
					livereload: true,
					middleware: function(connect, options) {
						if (!Array.isArray(options.base)) {
							options.base = [ options.base ];
						}
						var middlewares = [ require('grunt-connect-proxy/lib/utils').proxyRequest ];
						options.base.forEach(function(base) {
							middlewares.push(connect.static(base));
						});
						var directory = options.directory
								|| options.base[options.base.length - 1];
						middlewares.push(connect.directory(directory));
						return middlewares;
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-traceur');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-connect-proxy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-traceur');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('build', ['traceur', 'concat', 'copy']);
	grunt.registerTask('serve', ['build', 'configureProxies:server', 'connect:server', 'watch']);

	grunt.registerTask('default', ['build']);

};