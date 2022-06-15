'use strict'

const fs = require('fs')
const path = require('path')
const glob = require('glob')

const srcPath = path.join(__dirname, '..', 'src')
const pkgPath = path.join(__dirname, '..', 'package.json')

const srcFiles = glob.sync(`${srcPath}/*.ts`)
                     .map((file) => file.replace(`${srcPath}/`, '').replace('.ts', ''))
                     .filter((file) => file !== 'index')

const exportsObj = srcFiles.reduce((acc, file) => ({
  ...acc,
  [`./${file}`]: {
    import: `./esm/${file}.js`,
    require: `./${file}.js`,
  }
}), {})

const packageJsonText = fs.readFileSync(pkgPath)
const packageJson = JSON.parse(packageJsonText)

const nextPackageJson = { ...packageJson, exports: exportsObj }

console.log('\nUPDATING EXPORTS: ', nextPackageJson)

fs.writeFileSync(pkgPath, JSON.stringify(nextPackageJson, null, 2))
