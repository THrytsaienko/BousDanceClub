const gulp = require('gulp'),
    sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('styles', function () {
    return gulp.src('../assets/scss/*.scss')
        .pipe(sass())
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('../assets/css'));
});