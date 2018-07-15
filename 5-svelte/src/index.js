/**
 * Coding Challenge Seven: Svelte Variant
 * @overview My submission for a developer coding challenge.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 Max Milton
 * Licensed under the MIT License
 */

import Banner from './Banner.html';

/* eslint-disable-next-line no-new */
new Banner({
  target: document.getElementById('banner'),
  data: {
    tile: '../tile.jpg',
    title: 'Home And Away',
  },
});
