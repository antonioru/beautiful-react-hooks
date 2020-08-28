const path = require('path');
const theme = require('./styleguidist.theme');
const getHooksDocFiles = require('./getHooksDocFiles');

module.exports = {
  title: 'Beautiful React Hooks docs',
  /* eslint-disable global-require */
  webpackConfig: require('./webpack.config.js'),
  /* eslint-enable global-require */
  ignore: ['test/**/*.spec.{js,jsx}', 'node_modules', 'docs', 'test'],
  exampleMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  styleguideDir: '../../dist-ghpages',
  ribbon: {
    url: 'https://github.com/beautifulinteractions/beautiful-react-hooks',
    text: 'Fork me on GitHub',
  },
  sections: [
    { name: 'Introduction', content: '../Introduction.md', sectionDepth: 1, },
    { name: 'Installation', content: '../Installation.md', sectionDepth: 1, },
    ...getHooksDocFiles(),
  ],
  require: [path.join(__dirname, 'setup.js'), path.join(__dirname, 'custom.css')],
  // Override Styleguidist components
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'EmptyComponent'),
    PathlineRenderer: path.join(__dirname, 'EmptyComponent'),
    ToolbarButtonRenderer: path.join(__dirname, 'EmptyComponent'),
    TableOfContentsRenderer: path.join(__dirname, 'CustomSidebar'),
    ComponentsListRenderer: path.join(__dirname, 'CustomComponentListRenderer'),
  },
  ...theme,
};

