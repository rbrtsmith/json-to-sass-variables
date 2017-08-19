const isObject = x => typeof x === 'object'

const parseValue = data => data

const buildVariable = (key, data, mapData) => (
  isObject(data[key])
    ? mapData(data[key])
    : `$${key}: ${parseValue(data[key])};`
)

const mapData = data =>
  Object.keys(data).map(key =>
    buildVariable(key, data, mapData)).join('\n')

module.exports = mapData
