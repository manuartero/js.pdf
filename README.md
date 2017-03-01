# js.pdf

## Print js objets to pdf files


### Quick Start

+ `$> npm install`
+ `$> npm start`: will run all examples at examples folder

### How to use

> **MODULE UNDER CONSTRUCTION: v0.0.1**


#### 1. Getting a .pdf file from a plain js object:

```
const createPdf = require('js.pdf');
createPdf(obj).toFile('./path/to/file.pdf');
```

#### 2. Customize the css of the output file easily:

```
const createPdf = require('js.pdf');
const css = {
  body: {
    font: 'Times-Roman'
  },
  h1: {
    margin: {
      top: 0
    }
  },
  h2: {
    color: '#33ff00'
  }
};
createPdf(obj, css).toFile('./path/to/file.pdf');
```

#### 3... TODO
