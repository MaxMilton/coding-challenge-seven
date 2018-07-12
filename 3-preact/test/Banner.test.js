import { h, render } from 'preact'; /* @jsx h */
import Banner from '../src/Banner';

describe('Banner component', () => {
  it('renders correctly', () => {
    expect.assertions(1);
    const wrapper = document.createElement('div');
    render(
      <Banner tile="../tile.jpg" title="Home And Away" />,
      wrapper,
    );
    expect(wrapper.innerHTML).toMatchSnapshot();
  });
});
