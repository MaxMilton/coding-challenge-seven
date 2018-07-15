/**
 * Coding Challenge Seven: Vue Variant
 * @overview My submission for a developer coding challenge.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 Max Milton
 * Licensed under the MIT License
 */

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

/* eslint-disable-next-line no-new */
new Vue({
  el: document.getElementById('app'),
  render: h => h(App),
});
