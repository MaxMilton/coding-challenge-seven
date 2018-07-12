/**
 * Coding Challenge Seven: React Simple Variant
 * @overview My submission for a developer coding challenge.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 Max Milton
 * Licensed under the MIT License
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import Banner from './Banner';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  body {
    margin: 6rem;
    background-color: rgb(0, 0, 0);
  }
`;

ReactDOM.render(
  <Banner tile="../tile.jpg" title="Home And Away" />,
  document.getElementById('banner'),
);
