var gulp = require('gulp')
		sass = require('gulp-sass')
		scsslint = require('gulp-scss-lint')
		minifyCSS = require('gulp-minify-css')
		rename = require('gulp-rename')
		concat = require('gulp-concat')
		autoprefixer = require('gulp-autoprefixer')
		addsrc = require('gulp-add-src')
		uglify = require('gulp-uglify')
		uncss = require('gulp-uncss')

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['css']);
    gulp.watch('js/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);

gulp.task('css', function() {
	return gulp.src('sass/styles.scss')
    .pipe(scsslint({'endless': true, 'config': 'sass/lint.yaml'}))
		.pipe(sass({style: 'expanded'}))
		.pipe(autoprefixer('last 2 version'))
		.pipe(addsrc.prepend('bower_components/foundation/css/foundation.css'))
		.pipe(addsrc.prepend('bower_components/foundation/css/normalize.css'))
		.pipe(concat('styles.min.css'))
		.pipe(uncss({html: ['public/**/*.html']}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('static/css'))
});

gulp.task('js', function() {
	return gulp.src('js/**.*.js')
		.pipe(addsrc.prepend('bower_components/jquery-cookie/jquery.cookie.js'))
		.pipe(addsrc.prepend('bower_components/jquery-placeholder/jquery.placeholder.js'))
		.pipe(addsrc.prepend('bower_components/jquery/dist/jquery.js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min'}))
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('static/js'))
});
