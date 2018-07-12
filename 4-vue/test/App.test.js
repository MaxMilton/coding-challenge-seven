'use strict';

// const Vue = require('vue');
// const { shallowMount } = require('@vue/test-utils');
const { mount } = require('@vue/test-utils');
const { createRenderer } = require('vue-server-renderer');
const App = require('../src/App.vue');

describe('App root component', () => {
  it('renders correctly', () => {
    // console.log('!! App', App);
    // expect.assertions(1);
    const renderer = createRenderer();
    // const wrapper = shallowMount(App);
    const wrapper = mount(App);
    // console.log('!! Wrap', wrapper);
    // console.log('!! HTML', wrapper.html());
    // console.log('!! EL', wrapper.element);

    // const vm = new Vue({
    //   el: document.createElement('div'),
    //   renderer: h => h(App),
    // });

    // renderer.renderToString(vm, (err, str) => {
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
