module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          seperator: ';'
        },
        files: [
          { src:[
              'public/include/common/javascript/jquery-1.11.1.js',
              'public/include/common/javascript/jquery-ui.js',
              'public/include/common/javascript/jquery.pagepiling.js',
              'public/include/common/javascript/jQueryPlugIns.js',
              'public/include/common/javascript/jquery.easing.js',
              'public/include/common/javascript/formDoggy.js',
              'public/include/common/javascript/application.js'
            ],
            dest: 'public/js/all.min.js'
          }
        ]
      },
      css: {
        options: {
          seperator: ' '
        },
        files: [
          {
            src: [
              'public/include/common/css/common.css',
              'public/include/common/css/jquery-ui.css',
              'public/include/common/css/jquery.pagepiling.css',
              'public/include/common/css/find.css',
              'public/include/common/css/slick.css',
              'public/include/common/css/style.css'
            ],
            dest: 'public/css/all.min.css'
          }
        ]
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/include/common/javascript/seunghoonScripts.js': ['public/js/all.min.js']
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      dist: {
        files: {
          'public/include/common/css/seunghoonStyles.css': 'public/css/all.min.css'
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/index.html': 'public/indexpre.html'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'htmlmin']);
};