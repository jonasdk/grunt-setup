// requirejs
// I have disabled generateSourceMaps: true, since I am not working on it
// right now and it shold speed up things a bit
module.exports = function(grunt) {
  grunt.config('requirejs', {
    compile: {
      options: {
        baseUrl: './app',
        'paths': {
          'imager': 'vendor/imager',
          'jquery': 'vendor/jquery-2.1.4',
        },
        generateSourceMaps: false,
        name: 'main',
        optimize: 'uglify2',
        out: './js/main.min.js',
        preserveLicenseComments: false,
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.config(['copy', 'require'], {
    files: [
      {
        expand: true,
        cwd: 'app/vendor',
        src: [
          'require.min.js',
          'modernizr.min.js',
          'numeral.min.js',
          'rangeslider.min.js',
          'inputTypeNumberPolyfill.min.js'
        ],
        dest: 'js/',
      },
    ],
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
};
