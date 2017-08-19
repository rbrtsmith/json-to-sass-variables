const buildVariables = require('./buildVariables')

module.exports = (json) =>
  buildVariables(JSON.parse(json))
