const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const changed = require('gulp-changed');

gulp.task('sass', function(){
    gulp.src('src/sass/main.scss')
        .pipe(changed('public/css'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload())
});

gulp.task('js', function(){
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(changed('public/js'))
        .pipe(gulp.dest('public/js'))
        .pipe(connect.reload())
});

gulp.task('html', function(){
    gulp.src('src/*.html')
        .pipe(changed('public'))
        .pipe(gulp.dest('public/'))
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
    gulp.watch('src/js/*.js', ['js']);
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

gulp.task('default', ['html', 'js', 'sass', 'img' ,'connect', 'watch']);