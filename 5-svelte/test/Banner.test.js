'use strict';

const Banner = require('../src/Banner.html');

describe('Banner component', () => {
  it.skip('throws error with no props', () => {
    expect.assertions(1);
    function wrapper() {
      const target = document.createElement('div');
      new Banner({ target });
    }
    expect(wrapper).toThrow();
  });

  it('renders correctly', () => {
    expect.assertions(3);
    const target = document.createElement('div');
    new Banner({
      target,
      data: {
        tile: '../tile.jpg',
        title: 'Home And Away',
      },
    });
    expect(target.querySelector('.banner > img.tile')).not.toBeNull();
    expect(target.querySelector('.overlay > h3.title')).not.toBeNull();
    expect(target.innerHTML).toMatchSnapshot();
  });
});
