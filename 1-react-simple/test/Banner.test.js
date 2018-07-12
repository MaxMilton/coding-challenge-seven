import React from 'react';
import renderer from 'react-test-renderer';
import Banner from '../src/Banner';

describe('Banner component', () => {
  it('prints errors with no props', () => {
    expect.assertions(1);
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    renderer.create(
      <Banner />,
    );
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockReset();
    spy.mockRestore();
  });

  it('renders correctly', () => {
    expect.assertions(2);
    const spy = jest.spyOn(console, 'error');
    const component = renderer.create(
      <Banner tile="../tile.jpg" title="Home And Away" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(spy).not.toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });
});
