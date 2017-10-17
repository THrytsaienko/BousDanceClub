const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'assets/scss/*.scss'])
        .pipe(sass())
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// Move JS Files to assets/js
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./assets"
    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'assets/scss/*.scss'], ['sass']);
    gulp.watch("assets/*.html").on('change', browserSync.reload);
});

// Move Fonts Folder to assets
gulp.task('fonts', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest("assets/fonts"));
});

// Move Font Awesome CSS to assets/css
gulp.task('fa', function () {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest("assets/css"));
});

gulp.task('default', ['js', 'serve', 'fa', 'fonts']);