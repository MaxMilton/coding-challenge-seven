module.exports = {
  moduleNameMapper: {
    '^react$': 'preact-compat',
    '^react-dom$': 'preact-compat',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest-nested',
  },
  testPathIgnorePatterns: [
    '/dist/',
    '/node_modules/',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
};
