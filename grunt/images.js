module.exports = function(grunt) {

  grunt.config('responsive_images', {
    main: {
      options: {
        sizes: [
            { width: 320  },
            { width: 640  },
            { width: 1024 },
            { width: 1912 },
        ],
      },
      files: [
        {
          expand: true,
          cwd: 'app/images-src',
          src: '*.{jpg,gif,png}',
          dest: 'images',
        },
      ],
    },
  });

  grunt.config('imagemin', {
    dist: {
      options: {
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }],
        progressive: true,
      },
      files: [
        {
          expand: true,
          src: ['images/**/*.{jpg,gif,png}'],
          overwrite: true,
        },
      ],
    },
  });

  grunt.registerTask('images', [], function() {
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.task.run('responsive_images', 'imagemin');
  });
};
