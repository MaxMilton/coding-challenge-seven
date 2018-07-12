import Banner from './Banner.html';

/* eslint-disable-next-line no-new */
new Banner({
  target: document.getElementById('banner'),
  data: {
    tile: '../tile.jpg',
    title: 'Home And Away',
  },
});
