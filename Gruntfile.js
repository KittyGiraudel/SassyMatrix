module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: [
          'src/functions/helpers/_valid-coords.scss',
          'src/functions/init/_matrix.scss',
          'src/functions/init/_unit-matrix.scss',
          'src/functions/misc/_rows.scss',
          'src/functions/misc/_columns.scss',
          'src/functions/setters/_set-entry.scss',
          'src/functions/setters/_set-row.scss',
          'src/functions/setters/_set-column.scss',
          'src/functions/getters/_get-entry.scss',
          'src/functions/getters/_get-row.scss',
          'src/functions/getters/_get-column.scss',
          'src/functions/misc/_display.scss',
          'src/functions/swap/_swap-entries.scss',
          'src/functions/swap/_swap-rows.scss',
          'src/functions/swap/_swap-columns.scss',
          'src/functions/checkers/_is-numeric.scss',
          'src/functions/checkers/_is-square.scss',
          'src/functions/checkers/_is-diagonal.scss',
          'src/functions/helpers/_is-triangular.scss',
          'src/functions/checkers/_is-upper-triangular.scss',
          'src/functions/checkers/_is-lower-triangular.scss',
          'src/functions/misc/_add-matrices.scss',
          'src/functions/misc/_transpose.scss',
          'src/functions/setters/_add-row.scss',
          'src/functions/setters/_add-colum.scssn'
        ],
        dest: 'dist/_SassyMatrix.scss',
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
                './src/**/*.scss'
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
