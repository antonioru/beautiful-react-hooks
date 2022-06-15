'use strict'

const fs = require('fs')
const path = require('path')

const nextVersion = process.argv[2]
const pkgPath = path.join(__dirname, '..', 'package.json')

const packageJsonText = fs.readFileSync(pkgPath)
const packageJson = JSON.parse(packageJsonText)

const nextPackageJson = { ...packageJson, version: nextVersion }

console.log('\nUPDATING PACKAGE JSON VERSION TO: ', nextVersion)

fs.writeFileSync(pkgPath, JSON.stringify(nextPackageJson, null, 2))
