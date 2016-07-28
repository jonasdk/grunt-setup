module.exports = function(grunt) {
  grunt.registerTask('default', ['watch']);

  grunt.config('watch', {
    js: {
      files: ['app/**/*.js'],
      tasks: ['lint', 'uglify', 'requirejs'],
      options: {
        spawn: false,
      },
    },
    scss: {
      // 'csslint',  er taget ud af tasks da de støjer for meget
      files: ['scss/**/*'],
      tasks: ['sass', 'postcss'],
      options: {
        spawn: false,
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
