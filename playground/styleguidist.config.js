module.exports = {
  title: 'beautiful react hooks playground',
  /* eslint-disable global-require */
  webpackConfig: require('./webpack.config.js'),
  /* eslint-enable global-require */
  ignore: ['test/**/*.spec.{js,jsx}', 'node_modules', 'docs', 'test'],
  exampleMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  sections: [
    { name: 'useCallbackRef', content: 'useCallbackRef.md' },
    { name: 'useLifecycle', content: 'useLifecycle.md' },
    { name: 'useOnMount', content: 'useOnMount.md' },
    { name: 'useWillUnMount', content: 'useWillUnmount.md' },
    { name: 'useWindowResize', content: 'useWindowResize.md' },
    { name: 'useDebouncedCallback', content: 'useDebouncedCallback.md' },
  ],
};
