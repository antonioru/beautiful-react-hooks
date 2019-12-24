const del = require('del');
const fs = require('fs');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');

const destPath = 'docs/';

del.sync(destPath);
fs.mkdirSync(destPath);

glob('src/!(*.spec|index).js', (err, result) => {
  if (err) throw err;

  result.forEach((file) => {
    const output = file.replace(/src\//, destPath).replace(/.js/, '.md');

    console.log(`Generating ${file} documentation...`);

    jsdoc2md.render({ files: [file], 'no-gfm': true }).then((doc) => {
      fs.writeFile(output, doc, { flag: 'wx' }, (error) => {
        if (error) throw error;

        console.log(`${output} successfully created.`);
      });
    });
  });
});
