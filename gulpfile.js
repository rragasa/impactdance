const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const paths = {
  html: 'index.html',
  scss: 'app/scss/**/*.scss',
  dist: 'dist/',
};

// compile scss into css
function style() {
  // 1. where is my scss file
  return gulp.src(paths.scss)
    // 2. pass that file through sass compiler
    .pipe(sass())
    // 3. where do I save the compiled CSS?
    .pipe(gulp.dest(paths.dist))
    // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.scss, style);
  gulp.watch(paths.html).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;