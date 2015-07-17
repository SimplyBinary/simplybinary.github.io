var gulp = require('gulp')
		, addsrc = require('gulp-add-src')
		, autoprefixer = require('gulp-autoprefixer')
		, concat = require('gulp-concat')
		, minifyCSS = require('gulp-minify-css')
		, rename = require('gulp-rename')
		, sass = require('gulp-sass')
		, scsslint = require('gulp-scsslint')
		, uglify = require('gulp-uglify')
		, uncss = require('gulp-uncss')

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.scss', 'public/**/*.html'], ['css']);
    gulp.watch('js/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);

gulp.task('css', function() {
	return gulp.src('sass/**/*.scss')
    .pipe(scsslint('sass/lint.yaml'))
		.pipe(scsslint.reporter()
		.on('error', function(error) {
			this.emit('end');
		}))
		.pipe(sass())
		.pipe(autoprefixer('last 2 version'))
		.pipe(addsrc.prepend('bower_components/font-awesome/css/font-awesome.css'))
		.pipe(addsrc.prepend('bower_components/foundation/css/foundation.css'))
		.pipe(addsrc.prepend('bower_components/foundation/css/normalize.css'))
		.pipe(concat('styles.min.css'))
		.pipe(uncss({html: ['public/**/*.html'], ignore: [/hover/, /focus/, /active/, /visited/, /not/, /condensed/]}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('static/css'))
});

gulp.task('js', function() {
	return gulp.src('js/**/*.js')
		.pipe(addsrc.prepend('bower_components/jquery-scrollspy-thesmart/scrollspy.js'))
		.pipe(addsrc.prepend('bower_components/foundation/js/foundation/foundation.topbar.js'))
		.pipe(addsrc.prepend('bower_components/foundation/js/foundation.js'))
		.pipe(addsrc.prepend('bower_components/jquery-cookie/jquery.cookie.js'))
		.pipe(addsrc.prepend('bower_components/jquery-placeholder/jquery.placeholder.js'))
		.pipe(addsrc.prepend('bower_components/jquery/dist/jquery.js'))
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('static/js'))
});
