import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Banner from './Banner';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  body {
    margin: 6rem;
    background-color: rgb(0, 0, 0);
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerTileX1: '../tile.jpg',
      bannerTileX2: '../tile@x2.jpg',
      bannerTitle: 'Home And Away',
    };
  }

  render() {
    const {
      bannerTileX1,
      bannerTileX2,
      bannerTitle,
    } = this.state;

    return (
      <Banner
        tileX1={bannerTileX1}
        tileX2={bannerTileX2}
        title={bannerTitle}
      />
    );
  }
}
