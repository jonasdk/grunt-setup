module.exports = function(grunt) {
  grunt.config('jshint', {
    files: ['Gruntfile.js', 'app/*.js', '!app/imager.js'],
    options: {
      jshintrc: './.jshintrc',
    },
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('lint', ['newer:jshint']);
};
