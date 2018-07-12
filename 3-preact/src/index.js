/**
 * Coding Challenge Seven: Preact Variant
 * @overview My submission for a developer coding challenge.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 Max Milton
 * Licensed under the MIT License
 */

import { h, render } from 'preact';
import { injectGlobal } from 'styled-components';
import Banner from './Banner';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  body {
    margin: 6rem;
    background-color: rgb(0, 0, 0);
  }
`;

render(
  <Banner tile="../tile.jpg" title="Home And Away" />,
  document.body,
);
