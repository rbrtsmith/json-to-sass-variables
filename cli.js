#! /usr/bin/env node
const fs = require('fs')
const source = process.argv[2]
const output = process.argv[3]
const jsonToSass = require('./index')

const writeSass = (scss) =>
  fs.writeFile(output, scss, 'utf8', error =>
    console.info(`Written Sass variables to ${output} 💫`)
  )

const readJSON = (error, data) =>
  writeSass(jsonToSass(data))

if (!source) {
  return console.error('Source location not specified')
}

if (!output) {
  return console.error('Output location not specified')
}

fs.readFile(source, 'utf8', readJSON)
