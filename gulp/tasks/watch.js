var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
      server: {
        baseDir: "./app/"
      },
      injectChanges: true
    });

    gulp.watch('./app/assets/scripts/**/*.js', gulp.parallel('scripts'))
      .on('change', browserSync.reload);
 
    // watch and rebuild .css files
    gulp.watch('./app/assets/styles/**/*.css', gulp.parallel('styles'))
      .on('change', function(){
          return gulp.src('./app/temp/styles/styles.css')
          .pipe(browserSync.stream({match: "**/*.css"}));
      });
  
    // Reload when html changes
    gulp.watch('./app/index.html')
      .on('change', browserSync.reload);
  
  });

gulp.task('cssInject', gulp.series(['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream({match: "**/*.css"}));
}));

gulp.task('scriptsRefresh', gulp.series(['scripts'], function(){
    browserSync.reload();
}));