import glob from 'glob';
import babel from 'rollup-plugin-babel';
import { version } from './package.json';

const name = 'beautiful-react-hooks';
const banner = `/* ${name} version: ${version} */`;

const config = [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: glob.sync('./src/**/*.js'),
    preserveModules: true,
    output: { dir: 'dist', format: 'cjs', exports: 'named', sourcemap: true, banner, name },
    external: ['react', 'react-dom', 'lodash.debounce', 'lodash.throttle'],
    plugins: [babel({
      comments: false,
      presets: ['@babel/preset-env'],
    })],
  },
];

export default config;
