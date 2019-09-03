# Generate Image

Generate images in browser and node.

## Installation and Usage

```
npm install --save generate-image
```

### In Browser

```js
import GenerateImage from 'generate-image';
```

or

```html
<script src="path/to/generate-image.min.js"></script>
```

1. Automatic: `<img src="" data-gi="w=300&h=150">`, 'src' should be empty
2. Programmatic:

```js
const target = document.getElementById('image-target');

const imageData = GenerateImage({
  w: 300,
  h: 150,
});
target.src = imageData;
```

### In Node

```js
const GenerateImage = require('generate-image');

const imageData = GenerateImage({
  w: 300,
  h: 150,
});
```

## API

### GenerateImage(options, mode, encode)

| argument | required | default | info |
|----------|----------|---------|------|
| options  | -        | -       | [options](#options) |
| mode     | -        | 'svg'     | render to 'svg' or 'png' (use canvas, and in browser only) |
| encode   | -        | true    | encode svg to `data:image/svg+xml`, or png to `data:image/png;base64`. if 'false', return pure svg or [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) |

### options

| argument | required | default | info |
|----------|----------|---------|------|
| w        | -        | 300     | width |
| h        | -        | 150     | height |
| bc       | -        | '#DDD'  | background color |
| fc       | -        | '#999'  | foreground color |
| t        | -        | ''      | texture: 'diagonal' or 'grid' |
| c        | -        | ''      | text content |

### License

[MIT](./LICENSE)
