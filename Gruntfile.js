module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },

    watch: {
      css: {
        files: 'less/*.less',
        tasks: ['less']
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    },

    karma: {
      unit: {
        options: {
          files: ['js/**/*.js']
        }
      }
    }
    // uglify: {
    //   options: {

    //   },
    //   files: [{
    //       expand: true,
    //       cwd: 'src/js',
    //       src: 'app/js/partials/**/*.js',
    //       dest: 'app/js/partials/main.min.js'
    //   }]
    // }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s)
  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('deploy', ['less', 'watch', 'cssmin']);
};