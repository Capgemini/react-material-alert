'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var reactify = require('reactify');
var browserifyES6Transpiler = require('browserify-es6-transpiler');

// add custom browserify options here
var customOpts = {
  entries: ['./js/app.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 
b.transform(reactify, {global: true});
b.transform(browserifyES6Transpiler)
// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal


function bundle() {
    
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./js/build'));
}


// add custom browserify options here
var customOptsBuild = {
  entries: ['./js/components/Alert.js'],
  debug: true
};
var buildOpts = assign({}, watchify.args, customOptsBuild);
var buildWatch = watchify(browserify(buildOpts)); 
buildWatch.transform(reactify, {global: true});
buildWatch.transform(browserifyES6Transpiler)
// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('dist', build); // so you can run `gulp js` to build the file
buildWatch.on('update', build); // on any dep update, runs the bundler
buildWatch.on('log', gutil.log); // output build logs to terminal


function build() {
    
  return buildWatch.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('react-material-alert.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./js/build'));
}