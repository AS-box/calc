const gulp = require("gulp");
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const nunjucksRender = require('gulp-nunjucks-render');

// sassとcssの保存先
gulp.task('sass', function(){
  gulp.src('./src/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(gulp.dest('./dist/'));
});

//自動監視
gulp.task('sass-watch', ['sass'], function(){
  let watcher = gulp.watch('./src/**/css/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
});

//サーバー起動
gulp.task('server', function() {
  return gulp.src('dist')
    .pipe(webserver({
      host: 'localhost',
      livereload: true,
      open: true
    }));
});

gulp.task('nunjucks', function () {
  return gulp.src([
    'src/template/**/*.html',
    '!src/template/**/_*.html',
  ])
    .pipe(nunjucksRender({
      path: ['src/template/']
    }))
    .pipe(gulp.dest('dist/'));
});

// gulp.task('nunjucks', function () {
//   return gulp.src([
//     'src/template/**/*.html',
//     '!src/template/**/*.njk',
//   ])
//     .pipe(nunjucksRender({
//       path: ['src/template/']
//     }))
//     .pipe(gulp.dest('dist/'));
// });
// gulp.task('nunjucks:watch', ['nunjucks'],function(){
//   let watcher = gulp.watch('src/template/**/*.html', ['nunjucks']);
//   watcher.on('change', function(event) {
//   });
// });

gulp.task('default', ['server','sass-watch']);