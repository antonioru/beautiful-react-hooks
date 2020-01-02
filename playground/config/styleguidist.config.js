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
  styleguideDir: '../../dist-ghpages',
  sections: [
    { name: 'useGlobalEvent', content: '../useGlobalEvent.md' },
    { name: 'usePrev', content: '../usePrev.md' },
    { name: 'useMediaQuery', content: '../useMediaQuery.md' },
    { name: 'useGeolocation', content: '../useGeolocation.md' },
    { name: 'useGeolocationState', content: '../useGeolocationState.md' },
    { name: 'useGeolocationEvents', content: '../useGeolocationEvents.md' },
    { name: 'useMouse', content: '../useMouse.md' },
    { name: 'useMouseState', content: '../useMouseState.md' },
    { name: 'useMouseEvents', content: '../useMouseEvents.md' },
    { name: 'useLifecycle', content: '../useLifecycle.md' },
    { name: 'useDidMount', content: '../useDidMount.md' },
    { name: 'useWillUnMount', content: '../useWillUnmount.md' },
    { name: 'useCallbackRef', content: '../useCallbackRef.md' },
    { name: 'useWindowResize', content: '../useWindowResize.md' },
    { name: 'useWindowScroll', content: '../useWindowScroll.md' },
    { name: 'useTimeout', content: '../useTimeout.md' },
    { name: 'useInterval', content: '../useInterval.md' },
    { name: 'useDebouncedCallback', content: '../useDebouncedCallback.md' },
    { name: 'useThrottledCallback', content: '../useThrottledCallback.md' },
  ],
  ...theme,
};
