module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({

    dir : {
      src : 'stylesheets',
      dist : 'dist'
    },

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: [
          '<%= dir.src %>/functions/misc/_display.scss',
          '<%= dir.src %>/functions/misc/_rows.scss',
          '<%= dir.src %>/functions/misc/_columns.scss',
          '<%= dir.src %>/functions/helpers/_valid-coords.scss',
          '<%= dir.src %>/functions/init/_matrix.scss',
          '<%= dir.src %>/functions/setters/_set-entry.scss',
          '<%= dir.src %>/functions/getters/_get-entry.scss',
          '<%= dir.src %>/functions/getters/_get-row.scss',
          '<%= dir.src %>/functions/swap/_swap-rows.scss',
          '<%= dir.src %>/functions/setters/_set-row.scss',
          '<%= dir.src %>/functions/checkers/_is-square.scss',
          '<%= dir.src %>/functions/setters/_add-row.scss',
          '<%= dir.src %>/functions/setters/_add-column.scss',
          '<%= dir.src %>/functions/setters/_set-column.scss',
          '<%= dir.src %>/functions/getters/_get-column.scss',
          '<%= dir.src %>/functions/checkers/_is-numeric.scss',
          '<%= dir.src %>/functions/checkers/_is-diagonal.scss',
          '<%= dir.src %>/functions/helpers/_is-triangular.scss',
          '<%= dir.src %>/functions/init/_unit-matrix.scss',
          '<%= dir.src %>/functions/swap/_swap-entries.scss',
          '<%= dir.src %>/functions/swap/_swap-columns.scss',
          '<%= dir.src %>/functions/checkers/_is-upper-triangular.scss',
          '<%= dir.src %>/functions/checkers/_is-lower-triangular.scss',
          '<%= dir.src %>/functions/misc/_add-matrices.scss',
          '<%= dir.src %>/functions/misc/_transpose.scss'
        ],
        dest: './<%= dir.dist %>/_SassyMatrix.scss',
      },
    },

    // Sass
    sass: {
      test: {
        options: {
          style: 'expanded',
          quiet: 'true',
          loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
        },
        files: {
          './tmp/results.css': './test/test.scss'
        }
      }
    },

    // Bootcamp
    bootcamp: {
      test: {
        files: {
          src: ['./tmp/results.css']
        }
      }
    },

    // Watch
    watch: {
      dist: {
        files: [
                './test/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test']
      }
    }
  });

  // Tasks
  grunt.registerTask('test', ['sass', 'bootcamp']);
  grunt.registerTask('dev', ['test', 'watch']);
  grunt.registerTask('build', ['test', 'concat']);

};
