const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

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
        './src/**/*',
        '!./src/*.html',
        '!./src/img/**',
        '!./src/css/**',
        '!./src/js/**',
        '!./src/sass/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDocsFolder'], function () {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/img"));
});

gulp.task('useminTrigger', ['deleteDocsFolder'], function () {
    gulp.start("usemin");
});

gulp.task('usemin', ['sass'], function () {
    return gulp.src("./src/*.html")
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