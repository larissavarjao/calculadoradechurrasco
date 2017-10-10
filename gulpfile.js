const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const align = require('gulp-align');
<<<<<<< HEAD
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const babel = require('babelify');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
=======
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const changed = require('gulp-changed');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
>>>>>>> Site versao 1.0

gulp.task('sass', function () {
    gulp.src('src/sass/main.scss')
        .pipe(changed('public/css'))
        .pipe(sass())
        .pipe(autoprefixer({
<<<<<<< HEAD
            browsers: ['last 2 versions', 'last 2 major versions', 'Firefox > 20', 'iOS 7', 'ie 6-8', 'last 2 iOS major versions'],
=======
            browsers: ['last 2 versions'],
>>>>>>> Site versao 1.0
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
<<<<<<< HEAD
=======
        .pipe(notify('SASS Salvo e modificado!'))
>>>>>>> Site versao 1.0
        .pipe(connect.reload())
});


<<<<<<< HEAD
gulp.task('minify-css', () => {
 return gulp.src('public/css/main.css')
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('public/css/main.minify.css'));
});

gulp.task('javasript', function () {
    gulp.src('src/js/*.js')
        .pipe(changed('public/js/'))
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
        .pipe(connect.reload())
});

=======
gulp.task('javasript', function () {
    gulp.src('src/js/*.js')
        .pipe(changed('public/js/'))
        .pipe(align())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('public/js/'))
        .pipe(notify('JS Salvo e modificado!'))
        .pipe(connect.reload())
});


>>>>>>> Site versao 1.0
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(changed('public'))
        .pipe(gulp.dest('public/'))
<<<<<<< HEAD
=======
        .pipe(notify('HTML Salvo e modificado!'))
>>>>>>> Site versao 1.0
        .pipe(connect.reload())
});

gulp.task('img', function () {
    gulp.src('src/img/*')
        .pipe(changed('public/img'))
        .pipe(gulp.dest('public/img'))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['javasript']);
    gulp.watch('src/img/*', ['img']);
    gulp.watch('src/*.html', ['html']);
})

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 8000,
        livereload: true
    });
});


<<<<<<< HEAD
gulp.task('default', ['html', 'javasript', 'sass', 'minify-css', 'img', 'connect', 'watch']);
=======
gulp.task('default', ['html', 'javasript', 'sass', 'img', 'connect', 'watch']);
>>>>>>> Site versao 1.0
