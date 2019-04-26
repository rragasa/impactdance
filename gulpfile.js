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

function fonts() {
  return gulp.src('app/scss/fonts/*.{eot,svg,ttf,woff,woff2}')
  .pipe(gulp.dest('dist/fonts/'))
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

function build() {
  return gulp.parallel(style, scripts, fonts, watch)();
}

exports.style = style;
exports.scripts = scripts;
exports.fonts = fonts;
exports.watch = watch;
exports.build = build;
exports.default = build;