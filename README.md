![react-bps](./logo.png)

[![npm](https://img.shields.io/npm/v/react-bps.svg?style=flat-square)](https://www.npmjs.com/package/react-bps)
[![npm](https://img.shields.io/npm/dt/react-bps.svg?style=flat-square)](https://www.npmjs.com/package/react-bps)
[![GitHub issues](https://img.shields.io/github/issues/renatorib/react-bps.svg?style=flat-square)](https://github.com/renatorib/react-bps/issues)
[![GitHub stars](https://img.shields.io/github/stars/renatorib/react-bps.svg?style=flat-square)](https://github.com/renatorib/react-bps/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/renatorib/react-bps.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/renatorib/react-bps)

:trident: Create breakpoints to your component props

---

**React Bps** – *where bps means **breakpoints*** – is a small and zero-config HOC that enable you to pass breakpoints to your component based on window width size.  
It uses [react-sizes](http://github.com/renatorib/react-sizes) to automatically track window width for you.

[Play with live examples on CodeSandBox](https://codesandbox.io/s/zk04n4m2jp)

> *You can [follow me on twitter](http://twitter.com/renatorib_) to stay connected in the news of react-bps and other projects of mine*

---

# How to use

Create your component and attach **withBps** HOC
```jsx
// Slider.jsx
import React from 'react'
import { withBps } from 'react-bps'

// create your component normally
const Slider = ({ arrows, itemsPerSlide }) => (
  /* all slider comp logic */
)

export default withBps()(Slider)
```

And now you can use `bps` prop additionally in your component
```jsx
// App.jsx
import React from 'react'
import { render } from 'react-dom'
import Slider from './Slider'

const App = () => (
  <Slider
    arrows={true} itemsPerSlide={3}
    bps={{ 600: { arrows: false, itemsPerSlide: 1 } }}
  >
    <div>Slide1</div>
    <div>Slide2</div>
    <div>Slide3</div>
  </Slider>
)

render(<App />, document.getElementById('root))
```

In this example your `<Slider>` will normally receive this props: `{ arrow: true, itemsPerSlide: 3 }`  
But if *window width is smaller (or equal) than **600***, so it will reflect this props: `{ arrow: false, itemsPerSlide: 1 }`
by **overwriting**.

In order to facilitate you can do something like this:
```jsx
const bps = {
  600: {
    arrows: false,
    itemsPerSlide: 1,
  }
}

<Slider arrows={true} itemsPerSlide={3} bps={bps}>
  <div>Slide1</div>
  <div>Slide2</div>
  <div>Slide3</div>
</Slider>
```

Or this:
```jsx
const bps = {
  600: {
    arrows: false,
    itemsPerSlide: 1,
  }
}

const sliderConfig = {
  arrows: true,
  itemsPerSlide: 1,
}

<Slider arrows={true} itemsPerSlide={3} bps={bps}>
  <div>Slide1</div>
  <div>Slide2</div>
  <div>Slide3</div>
</Slider>
```

In fact it's up to you.

# Creating breakpoints

You can create as many breakpoints as you want, just pass the width and the config.  
The config will be overwritted into your props, so if you pass a empty object this
will not change existing props.

```jsx
const bps = {
  1000: {},
  700: { a: 2 },
  500: { a: 2, b: false },
}

<Foo a={1} b={2} bps={bps} />

// in width <= 1000px will reflect:
<Foo a={1} b={2} />

// width <= 700px
<Foo a={2} b={2} />

// width <= 500px
<Foo a={2} b={false} />
```

# Mobile first strategy

By default, the rules are applied by desktop first strategy.  
If you want to use mobile first strategy, you can pass by a configuration

```js
withBps({ mobileFirst: true })(Component)
```

This way, the rules will be applied when width are higher or equals than setted breakpoint.

# Change prop `bps`

You can chose the name you want as prop to override `bps` by a `propName` config

```js
withBps({ propName: 'breakpoints' })(Component)
```

```jsx
<Foo a={1} b={2} breakpoints={{ /* my breakpoints rules */ }} />
```

# Install

### Node Module
```
yarn add react-bps
```
```
npm i react-bps
```

### UMD library
```html
<script src="https://unpkg.com/react-bps/dist/react-bps.min.js"></script>
```
exposed as `ReactBps`

# Contribute

You can help improving this project sending PRs and helping with issues.  
Also you can ping me at [Twitter](http://twitter.com/renatorib_)
