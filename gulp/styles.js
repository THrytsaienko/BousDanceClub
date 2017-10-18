const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// Compile Sass & Inject Into Browser
gulp.task('styles', function () {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// // Watch Sass & Server
// gulp.task('serve', ['sass'], function () {
//     browserSync.init({
//         server: "./assets"
//     });
//     gulp.watch('assets/scss/*.scss', ['sass']);
//     gulp.watch("assets/*.html").on('change', browserSync.reload);
// });

// gulp.task('default', ['serve']);