'use strict';

// const { shallowMount } = require('@vue/test-utils');
const { mount } = require('@vue/test-utils');
// const { createRenderer } = require('vue-server-renderer');
const Banner = require('../src/Banner.vue');

describe('Banner component', () => {
  it.skip('prints errors with no props', () => {
    // expect.assertions(1);
    // const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    // shallowMount(Banner);
    // expect(spy).toHaveBeenCalledTimes(1);
    // spy.mockReset();
    // spy.mockRestore();
  });

  it.skip('renders correctly', () => {
    expect.assertions(1);
    // const renderer = createRenderer();
    // const wrapper = shallowMount(Banner, {
    const wrapper = mount(Banner, {
      // data: {
      propsData: {
        tile: '../tile.jpg',
        title: 'Home And Away',
      },
    });
    // renderer.renderToString(wrapper.vm, (err, str) => {
    //   if (err) throw new Error(err);
    //   expect(str).toMatchSnapshot();
    // });

    // expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
