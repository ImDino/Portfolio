const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./scss/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    // 3. where do I save the compiled CSS?
    .pipe(gulp.dest('./css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}


exports.style = style;
