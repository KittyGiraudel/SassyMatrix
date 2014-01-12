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
        // src: Will be filed by `updateConcatFiles
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
  grunt.registerTask('build', ['updateConcatFiles', 'test', 'concat']);

  grunt.registerTask('updateConcatFiles', 'pull out the files form `src/matrix.scss` ', function() {
    var matricContent = grunt.file.read('src/matrix.scss'),
        regex = /@import\s*"(.*?)";/g,
        paths = [],
        match;

    while ( ( match = regex.exec(matricContent)) !== null ){
      var path = match[1],
          realPath = path.substr(0, path.lastIndexOf('/')+1),
          fileName = path.substr(path.lastIndexOf('/')+1);

      paths.push ( 'src/' + realPath + '_' + fileName + '.scss' );
    }

    grunt.config.set('concat.dist.src', paths);
  });

};
