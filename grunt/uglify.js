module.exports = function(grunt) {
  grunt.config('uglify', {
    options: {
      mangle: true
    },
    dist: {
      files: {
        'app/vendor/require.min.js': ['app/vendor/require.js'],
        'app/vendor/picturefill.min.js': ['app/vendor/picturefill.js'],
        'app/vendor/rangeslider.min.js': ['app/vendor/rangeslider.js'],
        'app/vendor/numeral.min.js': ['app/vendor/numeral.js','app/vendor/numeral-da-dk.js'],
        'app/vendor/inputTypeNumberPolyfill.min.js': ['app/vendor/inputTypeNumberPolyfill.js'],
        'js/inline.min.js': ['app/inline.js'],
        'js/behaviors-form.min.js': ['app/behaviors-form.js'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
