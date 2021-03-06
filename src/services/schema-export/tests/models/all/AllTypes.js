exports.IndexedTypes = {
  name: 'IndexedTypes',
  primaryKey: 'intIndexed',
  properties: {
    boolIndexed: { type: 'bool', indexed: true },
    intIndexed: { type: 'int', indexed: true },
    stringIndexed: { type: 'string', indexed: true },
    dateIndexed: { type: 'date', indexed: true },
  }
}

exports.OptionalTypes = {
  name: 'OptionalTypes',
  properties: {
    boolOptional: 'bool?',
    intOptional: 'int?',
    floatOptional: 'float?',
    doubleOptional: 'double?',
    stringOptional: 'string?',
    dateOptional: 'date?',
    dataOptional: 'data?',
    objectOptional: 'RequiredTypes',
    boolOptionalArray: 'bool?[]',
    intOptionalArray: 'int?[]',
    floatOptionalArray: 'float?[]',
    doubleOptionalArray: 'double?[]',
    stringOptionalArray: 'string?[]',
    dateOptionalArray: 'date?[]',
    dataOptionalArray: 'data?[]',
  }
}

exports.RequiredTypes = {
  name: 'RequiredTypes',
  properties: {
    boolRequired: 'bool',
    intRequired: 'int',
    floatRequired: 'float',
    doubleRequired: 'double',
    stringRequired: 'string',
    dateRequired: 'date',
    dataRequired: 'data',
    boolRequiredArray: 'bool[]',
    intRequiredArray: 'int[]',
    floatRequiredArray: 'float[]',
    doubleRequiredArray: 'double[]',
    stringRequiredArray: 'string[]',
    dateRequiredArray: 'date[]',
    dataRequiredArray: 'data[]',
    objectRequiredArray: 'RequiredTypes[]'
  }
}

exports.LinkTypes = {
  name: 'LinkTypes',
  properties: {
    objectType: { type: 'ReverseType',  optional: true },
    objectType2: { type: 'ReverseType',  optional: true },
    listType: 'ReverseType[]',
    linkingObjects: {type: 'linkingObjects', objectType: 'ReverseType', property: 'links'}
  }
}

exports.ReverseType = {
  name: 'ReverseType',
  properties: {
    links: 'LinkTypes'
  }
}
