# babel-plugin-react-v-html
Babel plugin for React component to transform the JSXAttribute from `v-html` to `dangerouslySetInnerHTML`.

## Installation

```bash
$ npm install babel-plugin-react-v-html --save-dev
```

## Motivation

When you use of the `innerHTML` in React, you usually use the `dangerouslySetInnerHTML` of JSXAttribute. But it is too long and complex, like this

``` jsx
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        html: `<h1>dangerouslySetInnerHTML is bad</h1>`
    }
  }
 
  render() {
    const html = this.state;

    return (
      <div dangerouslySetInnerHTML={{__html: html}} />
    )
  }
}
```

It's so troublesome, although It wants to warn you the `innerHTML` is dangerous because the `innerHTML` can open you up to a `cross-site scripting (XSS)` attack.
So, this plugin is born to resolve this problem.
With this plugin, you can easily code.

Instead,

``` jsx
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        html: `<h1>v-html is awesome</h1>`
    }
  }
  
  render() {
    const html = this.state;

    return (
      <div v-html={html} />
    )
  }
}
```

## Usage

Write via [babelrc](https://babeljs.io/docs/usage/babelrc/).

``` json
// .babelrc
{
  "plugins": [
      "react-v-html"
  ]
}

```
