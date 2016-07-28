module.exports = function(grunt) {
  grunt.registerTask('dist', ['jshint', 'uglify', 'requirejs', 'sass', 'postcss', 'images', 'copy']);

  //grunt.registerTask('default', ['jshint', 'requirejs', 'sass', 'csslint', 'autoprefixer', 'images', 'copy']);
};
