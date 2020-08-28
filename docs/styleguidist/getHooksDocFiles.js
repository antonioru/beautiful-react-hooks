const glob = require('glob');
const path = require('path');

const getHooksDocFiles = () => glob.sync(path.join(__dirname, '..', '[use]*.md')).map((filePath) => {
  const [filename] = filePath.match(/use[a-zA-Z]*/, 'gm');

  return ({
    name: filename,
    content: `../${filename}.md`,
  });
});

module.exports = getHooksDocFiles;
