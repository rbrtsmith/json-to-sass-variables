#! /usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')

const source = process.argv[2]
const output = process.argv[3]
const jsonToSassVariables = require('./src/index')

const writeSass = scss =>
  fs.writeFile(output, scss, 'utf8', (err) => {
    if (err) {
      return console.error(err)
    }

    return console.info(`Written Sass variables to ${output} 💫`)
  })

const readJSON = (err, data) => {
  if (err) {
    return console.error(err)
  }

  return writeSass(jsonToSassVariables(data))
}


if (!source) {
  return console.error('Source location not specified')
}

if (!output) {
  return console.error('Output location not specified')
}

return fs.readFile(source, 'utf8', readJSON)
