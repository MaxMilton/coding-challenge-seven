// XXX: Not transpiling to es5 with babel or buble because if browsers can handle
// shadow dom then they can definitely handle any other modern JS APIs. In real
// apps it's necessary to also load polyfills for cross-browser compatibility.

import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    format: 'es', // XXX: This is the most lightweight format but can be an issue in some scenarios
    name: 'banner',
    file: '../docs/6-vanilla-js-web-component/bundle.js',
  },
  plugins: [
    production && terser(),
  ],
};
