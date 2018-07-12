// https://facebook.github.io/jest/docs/en/configuration.html

'use strict';

module.exports = {
  // XXX: Workaround for 3-preact which needs a custom setup
  projects: [
    '<rootDir>',
    '<rootDir>/3-preact',
  ],
  transform: {
    // '^.+\\.jsx?$': 'babel-jest', // XXX: Can't handle nested .babelrc -- https://github.com/facebook/jest/issues/6617
    '^.+\\.jsx?$': 'babel-jest-nested',
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.html$': '@minna-ui/jest-config/lib/svelte-transform.js',
  },
  testPathIgnorePatterns: [
    '/3-preact/', // XXX: Need custom jest setup
    '/docs/',
    '/node_modules/',
  ],
  moduleFileExtensions: [
    'html',
    'js',
    'jsx',
    'vue',
  ],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  collectCoverageFrom: [
    '1-react-simple/src/*.{js,jsx}',
    '2-react-fancy/src/*.{js,jsx}',
    // '3-preact/src/*.{js,jsx}', // FIXME: Coverage not collected because of custom jest setup
    '4-vue/src/*.{js,vue}', // FIXME: Missing Banner.vue in coverage
    '5-svelte/src/*.{js,html}', // FIXME: Not showing in coverage
    // '6-vanilla-js-web-component/src/*.js', // FIXME: no web component API support in jsdom
    '!1-react-simple/src/index.js',
    '!2-react-fancy/src/index.js',
    // '!3-preact/src/index.js',
    '!4-vue/src/index.js',
    '!5-svelte/src/index.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
