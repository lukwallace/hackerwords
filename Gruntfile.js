module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'client/src/*.js*',
        dest: 'client/build/<%= pkg.name %>.js'
      } 
    },
    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'client/src/', // Custom folder
          src: ['*.jsx'],
          dest: 'client/build/', // Custom folder
          ext: '.js'
        }]
        // files: [{
        //   src: 'client/src/*.jsx',
        //   dest: 'client/build/',
        //   ext: '.js'
        // }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel']);
};