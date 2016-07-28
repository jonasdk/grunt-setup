module.exports = function(grunt) {
  grunt.config('sass', {
    main: {
      options: {
        //outputStyle: 'compressed', outputStyle: 'expanded',
        outputStyle: 'compressed',
        sourceMap: false,
        precision: '4',
      },
      files: {
        './style/inline.css': './scss/inline.scss',
        './style/main.css': './scss/main.scss',
        './style/screen.css': './scss/screen.scss',
        './style/admin.css': './scss/admin.scss',
      },
    },
  });
  grunt.loadNpmTasks('grunt-sass');
};
