const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const paths = {
  html: 'index.html',
  scss: 'app/scss/**/*.scss',
  js: 'app/js/**/*.js',
  dist: 'dist/',
};

function style() {
  return gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.scss, style);
  gulp.watch(paths.js, scripts);
  gulp.watch(paths.html).on('change', browserSync.reload);
}

exports.style = style;
exports.scripts = scripts;
exports.watch = watch;