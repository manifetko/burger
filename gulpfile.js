const { src, dest, task, series, watch } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
sass.compiler = require('node-sass');
const reload = browserSync.reload;

task('html', () => {
    return src('src/index.html')
        .pipe(concat('index.html'))
        .pipe(dest('dist'))
});

const libs = [
    'node_modules/jquery/dist/jquery.js',
    'src/js/mobile-detect.js',
    'src/js/jquery.touchSwipe.js',
    'src/js/main.js'
];

task('scripts', () => {
    return src(libs)
        .pipe(concat('main.js'))
        .pipe(dest('dist'))
});

task('styles', () => {
    return src('src/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('main.min.css'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(dest('dist'))
});

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

watch('./src/js/main.js', series('scripts')).on('change', reload);
watch('./src/index.html', series('html')).on('change', reload);
watch('./src/scss/*.scss', series('styles')).on('change', reload);
task('default', series('styles', 'scripts', 'html', 'server'));