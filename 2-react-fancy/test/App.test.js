import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('App root component', () => {
  it('renders correctly', () => {
    expect.assertions(2);
    const spy = jest.spyOn(console, 'error');
    const component = renderer.create(
      <App />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(spy).not.toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });
});
