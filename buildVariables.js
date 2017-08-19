const isObject = x => typeof x === 'object'

parseValue = (data) => {
  return data
}

const buildVariable = (key, data) =>
  isObject(data[key])
    ? mapData(data[key])
    : `$${key}: ${parseValue(data[key])};`

const mapData = (data) =>
  Object.keys(data).map(key =>
    buildVariable(key, data)).join('\n')

module.exports = mapData
