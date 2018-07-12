<!-- markdownlint-disable first-line-h1 no-inline-html -->

[![Build status](https://travis-ci.com/MaxMilton/coding-challenge-seven.svg?branch=master)](https://travis-ci.com/MaxMilton/coding-challenge-seven)
[![Coverage status](https://img.shields.io/codecov/c/github/MaxMilton/coding-challenge-seven.svg)](https://codecov.io/gh/MaxMilton/coding-challenge-seven)
[![Licence](https://img.shields.io/github/license/MaxMilton/coding-challenge-seven.svg)](https://github.com/MaxMilton/coding-challenge-seven/blob/master/LICENCE)

# Coding Challenge Seven

My submission for a developer coding challenge.

You can see a working demo at <http://MaxMilton.github.io/coding-challenge-seven>.

## Overview

Because the challenge itself is very simple, I've implemented it in various frameworks and using various build systems. It's often work exploring a problem and picking the right tool for the job.

All variants include simple unit tests and 100% code coverage. Exceptions are `6. Vanilla JS web component` because testing native web components would take too much time to set up and `4. Vue` which is having some intermittent test snapshot issues which I wasn't able to fix in time.

| Variant | Framework | Build System | JS Bundle Raw | Brotli Compressed | Description |
| --- | --- | --- | --- | --- | --- |
| 1. React simple | [React.js](https://reactjs.org/) | Webpack | 147 KB | 43 KB | Most simple implementation which covers exactly what the challenge instructions require. A simple, stateless/functional, but fully customizable React component using `styled-components` for CSS and prop validation + tests. |
| 2. React fancy | React.js | Webpack | 150 KB | 44 KB | Same as 1. but with a SPA app approach + an extra component for dynamic images depending on display pixel density. In production when you target many screen sizes this is the better way to go in order to save on network data transfer. |
| 3. Preact | [Preact.js](https://preactjs.com/) | Webpack | 65 KB | 22 KB | Simple implementation, same as `1. React Simple` but using Preact which is a React API compatible framework which focuses on size and performance. When you need React features and have a standard web environment (e.g. not native mobile) this is often a better option. |
| 4. Vue | [Vue.js](https://vuejs.org/) | Webpack | 72 KB | 23 KB | Simple implementation using the Vue, another popular framework which is fast both in the sence of performance but also in regards to development speed. The Vue community is as rich as React's and this also makes it a great choice for enterprise projects. |
| 5. Svelte | [Svelte](https://svelte.technology/) | Rollup | 2.6 KB | 1002 B | Minimal implementation using the cutting edge Svelte framework. Because Svelte is reasonable new the community around it is only just growing and as a result there aren't as many projects using it yet. That said, it's my favourite at the moment because of it's very high performance, small bundle size, and is still full featured. |
| 6. Vanilla JS web component | None; [web component API](https://www.webcomponents.org/) | Rollup | 1.1 KB | 402 B | I wanted an actual challenge for myself because I had never make a web component using plain JS. Although it's a little more hands on to build, the bundle size and performance speaks for itself. The big caveat here is browser support it limited without using polyfills. |

## Instructions

### Install

This project uses Yarn (not NPM because Yarn has support for workspaces). You can get it from <https://yarnpkg.com> (recommended) or alternatively run:

```sh
npm install --global yarn
```

Then setup the project (installs dependencies, and sets up Yarn workspace):

```sh
yarn run setup
```

### Run linting check, tests, and collect code coverage

```sh
yarn run test
```

### Run production mode build

```sh
yarn run build
```

### Run development mode

For development you need to work on one variant at a time. Open the variant directory and then run:

```sh
# Step 1. open variant directory, e.g.
cd 1-react-simple

# Step 2. run this commend:
yarn run dev
```

## Original challenge outline

### Goal

Create a view with a component that looks like the attached composite image using your preferred elements and the assets from this ZIP.

### Tasks

1. Utilise React `styled-components` on a simple React view to reach the goal
1. Post the solution to a viewable directory on github.io

### Links

[https://styled-components.com/](https://styled-components.com/)

[https://pages.github.com/](https://pages.github.com/)

### Assets

![./static/logo.png](./static/logo.png)

![./static/tile.jpg](./static/tile.jpg)

![./static/comp@x1.png](./static/comp@x1.png)

## Licence

This is MIT licensed, open source code. See [LICENCE](https://github.com/MaxMilton/coding-challenge-seven/blob/master/LICENCE).

-----

© 2018 [Max Milton](https://maxmilton.com)
