module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        libsdir: 'bower_components',
        connect: {
            options: {
                port: 8000,
                hostname: 'localhost',
                livereload: true//,
                //keepalive: true
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        './dist/'
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/**/*.*',
                    'css/*.css',
                    'index.html',
                    'Gruntfile.js',
                    'package.json'
                ],
                tasks: ['concat', 'copy'],
                options: {
                    livereload: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            distJS: {
                src: '<%= pkg.files.js%>',
                //src: ['src/**/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            },
            distCSS: {
                src: '<%= pkg.files.css%>',
                //src: ['css/*.css'],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            distJS: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.distJS.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true, 
                        cwd: 'src',
                        src: '**/*.html',
                        dest : 'dist/views',
                        filter: 'isFile'
                    },
                    {
                        expand: true, 
                        cwd: 'css',
                        src: 'img/*.*',
                        dest : 'dist/css',
                        filter: 'isFile'
                    },
                    {
                        expand: true, 
                        src: ['index.html'], 
                        dest: 'dist'
                    },
                    {
                        src: '<%=  libsdir %>/angular/angular.min.js',
                        dest : 'dist/libs/angular.js'
                    },
                    {
                        src: '<%=  libsdir %>/angular-route/angular-route.min.js',
                        dest : 'dist/libs/angular-route.js'
                    },
                    {
                        src: '<%=  libsdir %>/angular-animate/angular-animate.min.js',
                        dest : 'dist/libs/angular-animate.js'
                    },
                    {
                        src: '<%=  libsdir %>/angular-aria/angular-aria.min.js',
                        dest : 'dist/libs/angular-aria.js'
                    },
                    {
                        src: '<%=  libsdir %>/angular-material/angular-material.min.js',
                        dest : 'dist/libs/angular-material.js'
                    },
                    {
                        src: '<%=  libsdir %>/angular-material/angular-material.min.css',
                        dest : 'dist/libs/angular-material.css'
                    },
                    {
                        src: '<%=  libsdir %>/jquery-2.1.0.min/index.js',
                        dest : 'dist/libs/jquery.js'
                    }
                ]
            }
        }
  });

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

  //grunt.registerTask('default', ['concat', 'uglify', 'copy']);
  grunt.registerTask('default', ['concat', 'copy']);

  grunt.registerTask('bFiles', function() {
    grunt.task.run([
        'concat',
        'watch'
        ]);
  });
  grunt.registerTask('build', function() {
    grunt.task.run([
        'concat', 
        'copy',
        'connect',
        'watch'
    ]);
  });

};