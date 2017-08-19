const { JSONParse } = require('./window')
const buildVariables = require('./buildVariables')

module.exports = json =>
  buildVariables(JSONParse(json))
