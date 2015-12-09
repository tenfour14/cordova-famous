var browserify = require('browserify');
var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var rename     = require('gulp-rename');
var less       = require('gulp-less');
var minifycss  = require('gulp-minify-css');
var uglify     = require('gulp-uglify');
var watch      = require('gulp-watch');

gulp.task('js',function(){
	browserify('./src/index.js')
	.bundle()
	.pipe(source('index.min.js'))
	.pipe(gulp.dest('./www/'));

	gulp.src('./www/index.js')
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./www/'));
});



gulp.task('css',function(){
	gulp.src('./src/index.less')
	.pipe(less())
	.pipe(minifycss({keepBreaks: false}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./www/'));
});

gulp.task('html',function(){
	gulp.src('./src/index.html')
	.pipe(gulp.dest('./www/'));
});

gulp.task('img',function(){
	gulp.src('./src/imgs')
	.pipe(gulp.dest('./www/'));
});

gulp.task('music',function(){
	gulp.src('./src/music')
	.pipe(gulp.dest('./www/'));
});

gulp.task('default',['js','css','img','music','html'],function(){});


gulp.task('watch',function(){
	watch('./src/**/*.js',function(){
		gulp.start('js');
	});

	watch('./src/**/*.less',function(){
		gulp.start('css');
	});
});