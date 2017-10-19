const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./src"
    });
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);