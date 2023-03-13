const fs = require('fs/promises')
const path = require('path')
const { globSync } = require('glob')

const docsPath = path.join(__dirname, '..', 'docs')
const distPath = path.join(__dirname, '..', 'dist')
const docFiles = globSync(`${docsPath}/*.md`)
  .map((file) => file.replace(`${docsPath}/`, '').replace('.md', ''))
  .filter((file) => file.startsWith('use'))

docFiles.forEach(async (hook) => {
  const docPath = path.join(docsPath, `${hook}.md`)
  const typeFile = path.join(distPath, `${hook}.d.ts`)

  const declarations = await fs.readFile(typeFile, { encoding: 'utf8' })
  const document = await fs.readFile(docPath, { encoding: 'utf8' })

  if (document.match(/<!-- Types -->/g)) {
    const cleared = emptyOldTypes(document).trim()
    const nextDocument = cleared.replace('<!-- Types -->', template(declarations)).trim()

    fs.writeFile(docPath, nextDocument, { encoding: 'utf8' }).then(() => {
      console.log(`Updated "${hook}" types`)
    })
  }
})

const template = (content) => `<!-- Types -->
### Types
    
\`\`\`typescript static
${content}
\`\`\`
<!-- Types:end -->
`

const emptyOldTypes = (content) => {
  const regex = /<!-- Types -->[\s\S]*<!-- Types:end -->/g

  return `${content.replace(regex, '\n').replace(/<!-- Types -->/g, '').trim()}

<!-- Types -->
`
}
