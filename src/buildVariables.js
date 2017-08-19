const isObject = x => typeof x === 'object'

const parseValue = data => data

const buildMap = (data, name) => {
  return Object.keys(data).reduce((acc, key, i, arr) => {
    return `${acc}${key}: ${data[key]}${i === arr.length - 1 ? '' : ','}\n`
  }, `\n$${name}: (\n`).concat(');\n')
}

const buildVariable = (key, data, mapData) => (
  isObject(data[key])
    ? buildMap(data[key], key)
    : `$${key}: ${parseValue(data[key])};`
)

const mapData = data =>
  Object.keys(data).map(key =>
    buildVariable(key, data, mapData)).join('\n')

module.exports = mapData
