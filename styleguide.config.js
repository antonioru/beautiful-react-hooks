const { globSync } = require('glob')
const path = require('path')
const theme = require('./docs/utils/_styleguidist.theme.js')

const srcPath = path.resolve(__dirname, 'src')
const docsPath = path.resolve(__dirname, 'docs')

const getHooksDocFiles = () => globSync(path.join(__dirname, 'docs', '[use]*.md')).map((filePath) => {
  const [filename] = filePath.match(/use[a-zA-Z]*/, 'gm')

  return ({
    name: filename, content: `./docs/${filename}.md`
  })
})

module.exports = {
  title: 'beautiful-react-hooks - documentation',
  pagePerSection: true,
  exampleMode: 'expand',
  skipComponentsWithoutExample: true,
  styleguideDir: 'dist-ghpages',
  ribbon: {
    url: 'https://github.com/antonioru/beautiful-react-hooks', text: 'Fork me on GitHub'
  },
  sections: [{ name: 'Introduction', content: './docs/Introduction.md', sectionDepth: 1 }, {
    name: 'Installation',
    content: './docs/Installation.md',
    sectionDepth: 1
  }, ...getHooksDocFiles()],
  require: [path.join(docsPath, 'utils', '_setup.js'), path.join(docsPath, 'utils', '_custom.css')],
  webpackConfig () {
    return {
      resolve: {
        alias: { 'beautiful-react-hooks': srcPath }
      },
      module: {
        rules: [{
          test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'
        }, {
          test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/
        }, {
          test: /\.css$/i, use: ['style-loader', 'css-loader']
        }, {
          test: /\.png$/, loader: 'url-loader'
        }]
      }
    }
  },
  styleguideComponents: {
    LogoRenderer: path.join(docsPath, 'utils', '_CustomLogo'),
    PathlineRenderer: path.join(docsPath, 'utils', '_EmptyComponent'),
    ToolbarButtonRenderer: path.join(docsPath, 'utils', '_EmptyComponent')
  },
  ...theme
}
