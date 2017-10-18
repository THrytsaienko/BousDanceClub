var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('default', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "assets"
        }
    });

    watch('./assets/index.html', function () {
        browserSync.reload();
    });

    watch('./assets/**/*.css', function () {
        gulp.start('cssInject');
    });

    watch('./assets/js/**/*.js', function () {
        gulp.start('scriptsRefresh');
    });

});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./assets/temp/css/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
    browserSync.reload();
});