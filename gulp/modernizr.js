var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
    return gulp.src(['./assets/css/**/*.css', './assets/js/**/*.js'])
    .pipe(modernizr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest('./assets/temp/js/'));
});