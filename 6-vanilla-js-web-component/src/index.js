// XXX: Not tracking code coverage as it's difficult to test web components
// properly with just jsdom. For real use I would have to find another way of
// testing web components custom elements.

class BannerItem extends HTMLElement {
  constructor() {
    super();

    // create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // get props
    const tileUrl = this.getAttribute('tile');
    const titleText = this.getAttribute('title');

    // create elements
    const style = document.createElement('style');
    const wrapper = document.createElement('div');
    const overlay = document.createElement('div');
    const tile = document.createElement('img');
    const logo = document.createElement('img');
    const title = document.createElement('h3');

    // set element attributes
    wrapper.setAttribute('class', 'banner');
    overlay.setAttribute('class', 'overlay');
    tile.setAttribute('class', 'tile');
    logo.setAttribute('class', 'network');

    let logoUrl;
    if (this.hasAttribute('logo')) {
      logoUrl = this.getAttribute('logo');
    } else {
      logoUrl = '../logo.png';
    }
    logo.src = logoUrl;

    tile.src = tileUrl;

    title.textContent = titleText;

    // create CSS to apply to the shadow dom
    style.textContent = '.banner{position:relative;display:inline-block}.tile{display:block}.overlay{position:absolute;bottom:0;box-sizing:border-box;display:flex;align-items:center;width:100%;padding:1rem;background-color:rgba(0,0,0,.5)}.network{width:auto;height:4.6rem}h3{margin:0 0 0 1rem;font-family:sans-serif;font-size:2.2rem;color:#fff}';

    // attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(tile);
    overlay.appendChild(logo);
    overlay.appendChild(title);
    wrapper.appendChild(overlay);
  }
}

customElements.define('banner-item', BannerItem);

// original CSS for reference
/*
`.banner {
  position: relative;
  display: inline-block;
}

.tile {
  display: block;
}

.overlay {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.network {
  width: auto;
  height: 4.6rem;
}

h3 {
  margin: 0 0 0 1rem;
  font-family: sans-serif;
  font-size: 2.2rem;
  color: rgb(255, 255, 255);
}`;
*/
