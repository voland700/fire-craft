var gulp        = require('gulp'),
	sass 		  		= require('gulp-sass'),
	autoprefixer  = require('gulp-autoprefixer'),
	concat        = require('gulp-concat'),
	cleancss      = require('gulp-clean-css'),
	rename 		  	= require("gulp-rename"),
	uglify        = require('gulp-uglify'),
	notify        = require('gulp-notify'),
	gutil         = require('gulp-util' ),
	fileinclude   = require('gulp-file-include'),
	imagemin      = require('gulp-imagemin'),
	pngquant      = require('imagemin-pngquant'),
	cache         = require('gulp-cache'),
	del 		  		= require('del'),
	dest          = require('gulp-dest'),
	browserSync   = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
		notify: false
    });
});

gulp.task('styles', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function() {
	return gulp.src([
		//'app/libs/jquery/jquery-3.3.1.min.js',
		'app/libs/OwlCarousel/owl.carousel.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('./dist/img')); // Выгружаем на продакшен
});

gulp.task('clear', function () {
    return cache.clearAll();
})


gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*.*')
	.pipe(gulp.dest('./dist/fonts'))
});

//Удалить всё в указанной папке
gulp.task('del', function() {
   return del(['./dist/*'])
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'
		}))
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('styles'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
	gulp.watch('app/*.html', gulp.parallel('code'))
});

gulp.task('default', gulp.series('del','fonts', 'img', 'code', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch')));