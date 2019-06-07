const Gulp = require('gulp')
const Autoprefixer = require('gulp-autoprefixer')
const Babel = require('gulp-babel')
const CleanCSS = require('gulp-clean-css')
const Pug = require('gulp-pug')
const Uglify = require('gulp-uglify')

Gulp.task('html', () =>
  Gulp.src('src/**/*.pug')
    .pipe(Pug())
    .pipe(Gulp.dest('dist')),
)

Gulp.task('css', () =>
  Gulp.src('src/**/*.css')
    .pipe(CleanCSS())
    .pipe(Autoprefixer())
    .pipe(Gulp.dest('dist')),
)

Gulp.task('js', () =>
  Gulp.src('src/**/*.js')
    .pipe(
      Babel({
        presets: [
          [
            '@babel/env',
            {
              targets: {
                browsers: browserList,
              },
            },
          ],
        ],
      }),
    )
    .pipe(
      Uglify({
        toplevel: true,
      }),
    )
    .pipe(Gulp.dest('dist')),
)

Gulp.task('rest', () =>
  Gulp.src(['src/**/*.svg', 'src/**/*.ico']).pipe(Gulp.dest('dist')),
)

Gulp.task('default', ['html', 'css', 'js', 'rest'])

Gulp.task('watch', ['default'], () => Gulp.watch('src/**/*', ['default']))
