const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const align = require('gulp-align');
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> master
=======
<<<<<<< HEAD
>>>>>>> master
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const babel = require('babelify');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> master
=======
const notify = require('gulp-notify');
=======
>>>>>>> Pendente resolver flebox auto-prefixer
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const babel = require('babelify');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
<<<<<<< HEAD
>>>>>>> Site versao 1.0
=======
const uglify = require('gulp-uglify');
>>>>>>> Pendente resolver flebox auto-prefixer
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master

gulp.task('sass', function () {
    gulp.src('src/sass/main.scss')
        .pipe(changed('public/css'))
        .pipe(sass())
        .pipe(autoprefixer({
<<<<<<< HEAD
<<<<<<< HEAD
            browsers: ['last 2 versions', 'last 2 major versions', 'Firefox > 20', 'iOS 7', 'ie 6-8', 'last 2 iOS major versions'],
=======
<<<<<<< HEAD
=======
>>>>>>> master
<<<<<<< HEAD
            browsers: ['last 2 versions', 'last 2 major versions', 'Firefox > 20', 'iOS 7', 'ie 6-8', 'last 2 iOS major versions'],
=======
            browsers: ['last 2 versions'],
>>>>>>> Site versao 1.0
=======
            browsers: ['last 2 versions', 'last 2 major versions', 'Firefox > 20', 'iOS 7', 'ie 6-8', 'last 2 iOS major versions'],
>>>>>>> Pendente resolver flebox auto-prefixer
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
<<<<<<< HEAD
=======
        .pipe(notify('SASS Salvo e modificado!'))
>>>>>>> Site versao 1.0
=======
>>>>>>> Pendente resolver flebox auto-prefixer
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
        .pipe(connect.reload())
});


<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Pendente resolver flebox auto-prefixer
>>>>>>> master
=======
<<<<<<< HEAD
=======
>>>>>>> Pendente resolver flebox auto-prefixer
>>>>>>> master
gulp.task('minify-css', () => {
 return gulp.src('public/css/main.css')
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('public/css/main.minify.css'));
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
gulp.task('javasript', function () {
    gulp.src('src/js/*.js')
        .pipe(changed('public/js/'))
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
        .pipe(connect.reload())
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> master
=======
=======
>>>>>>> Pendente resolver flebox auto-prefixer
gulp.task('javasript', function () {
    gulp.src('src/js/*.js')
        .pipe(changed('public/js/'))
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
        .pipe(connect.reload())
});

<<<<<<< HEAD

>>>>>>> Site versao 1.0
=======
>>>>>>> Pendente resolver flebox auto-prefixer
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(changed('public'))
        .pipe(gulp.dest('public/'))
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
<<<<<<< HEAD
=======
        .pipe(notify('HTML Salvo e modificado!'))
>>>>>>> Site versao 1.0
=======
>>>>>>> Pendente resolver flebox auto-prefixer
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
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
<<<<<<< HEAD
gulp.task('default', ['html', 'javasript', 'sass', 'minify-css', 'img', 'connect', 'watch']);
=======
<<<<<<< HEAD
=======
>>>>>>> master
<<<<<<< HEAD
gulp.task('default', ['html', 'javasript', 'sass', 'minify-css', 'img', 'connect', 'watch']);
=======
gulp.task('default', ['html', 'javasript', 'sass', 'img', 'connect', 'watch']);
>>>>>>> Site versao 1.0
=======
gulp.task('default', ['html', 'javasript', 'sass', 'minify-css', 'img', 'connect', 'watch']);
>>>>>>> Pendente resolver flebox auto-prefixer
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
