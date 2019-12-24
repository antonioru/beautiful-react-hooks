const theme = require('./styleguidist.theme');

module.exports = {
  title: 'beautiful react hooks playground',
  /* eslint-disable global-require */
  webpackConfig: require('./webpack.config.js'),
  /* eslint-enable global-require */
  ignore: ['test/**/*.spec.{js,jsx}', 'node_modules', 'docs', 'test'],
  exampleMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  styleguideDir: '../../dist-gitpages',
  sections: [
    { name: 'useCallbackRef', content: '../useCallbackRef.md' },
    { name: 'useOnMount', content: '../useOnMount.md' },
    { name: 'useWillUnMount', content: '../useWillUnmount.md' },
    { name: 'useLifecycle', content: '../useLifecycle.md' },
    { name: 'useWindowResize', content: '../useWindowResize.md' },
    { name: 'useWindowScroll', content: '../useWindowScroll.md' },
    { name: 'useDebouncedCallback', content: '../useDebouncedCallback.md' },
    { name: 'useThrottledCallback', content: '../useThrottledCallback.md' },
    { name: 'useMouse', content: '../useMouse.md' },
    { name: 'useMouseHandler', content: '../useMouseHandler.md' },
    { name: 'useMouseState', content: '../useMouseState.md' },
    { name: 'useTimeout', content: '../useTimeout.md' },
    { name: 'useInterval', content: '../useInterval.md' },
  ],
  ...theme,
};
