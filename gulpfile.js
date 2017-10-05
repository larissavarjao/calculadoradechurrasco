const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const align = require('gulp-align');
const notify = require( 'gulp-notify' );
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const changed = require('gulp-changed');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');

gulp.task('sass', function(){
    gulp.src('src/sass/main.scss')
        .pipe(changed('public/css'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
        .pipe( notify( 'SASS Salvo e modificado!' ) )
        .pipe(connect.reload())
});


gulp.task('javasript', function(){
    gulp.src('src/js/*.js')
    .pipe(changed('public/js/'))
    .pipe(align())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js/'))
    .pipe(notify( 'JS Salvo e modificado!' ) )
    .pipe(connect.reload())
});


gulp.task('html', function(){
    gulp.src('src/*.html')
        .pipe(changed('public'))
        .pipe(gulp.dest('public/'))
        .pipe( notify( 'HTML Salvo e modificado!' ) )
        .pipe(connect.reload())
});

gulp.task('img', function(){
    gulp.src('src/img/*')
        .pipe(changed('public/img'))
        .pipe(gulp.dest('public/img'))
        .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['javasript']);
    gulp.watch('src/img/*', ['img']);
    gulp.watch('src/*.html', ['html']);
})

gulp.task( 'connect', function() {
    connect.server({
        root: 'public',
        port: 8000,
        livereload: true
    });
  });


gulp.task('default', ['html', 'javasript', 'sass', 'img' ,'connect', 'watch']);