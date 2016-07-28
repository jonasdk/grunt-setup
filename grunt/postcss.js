module.exports = function(grunt) {
  grunt.config('postcss', {
    options: {
      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
        require('cssnano')(), // minify the result
      ],

      // browsers: ['> 3%', 'last 3 version', 'ie 9'],
    },
    dist: {
      src: './style/*.css',
    },
  });

  grunt.loadNpmTasks('grunt-postcss');
};
