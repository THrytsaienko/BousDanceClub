var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();


gulp.task('previewDocs', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('deleteDocsFolder', function () {
    return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDocsFolder'], function () {
    var pathsToCopy = [
        './assets/**/*',
        '!./assets/index.html',
        '!./assets/img/**',
        '!./assets/css/**',
        '!./assets/js/**',
        '!./assets/temp',
        '!./assets/temp/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDocsFolder'], function () {
    return gulp.src('./assets/img/**/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/img"));
});

gulp.task('useminTrigger', ['deleteDocsFolder'], function () {
    gulp.start("usemin");
});

gulp.task('usemin', ['styles', 'scripts'], function () {
    return gulp.src("./assets/index.html")
        .pipe(usemin({
            css: [function () {
                return rev()
            }, function () {
                return cssnano()
            }],
            js: [function () {
                return rev()
            }, function () {
                return uglify()
            }]
        }))
        .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDocsFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);