const { src, dest, series } = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

// source directory
const srcDir = '../src';

// destination directory
const destDir = '../dist';

/**
 * Transpile all javascript files within the /src directory using babel.
 * The test files (.spec.js) are excluded.
 */
const transpileJs = () => {
  const jsFiles = `${srcDir}/**/!(*.spec).js`;

  return src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env'],
      ignore: ['src/**/*.spec.js', 'src/**/*.test.js'],
      comments: false,
      plugins: [
        ['babel-plugin-transform-require-ignore', { extensions: ['.less', '.sass', '.scss', '.css'] }],
      ],
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(destDir));
};

transpileJs.displayName = 'transpile';
transpileJs.description = 'Transpile javascript files';

/**
 * Clean the destination folder before build
 */
const cleanDest = () => del([destDir], { force: true });

cleanDest.displayName = 'clean destination folder';
cleanDest.description = 'Remove all the previously built files';

// export tasks
module.exports.cleanDest = cleanDest;
module.exports.transpileJs = transpileJs;

// default task
module.exports.default = series(cleanDest, transpileJs);
