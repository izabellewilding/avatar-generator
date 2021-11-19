const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

mergeImages(['./body.png', './eyes.png', './mouth.png'], {
  Canvas: Canvas,
  Image: Image
})
  .then(b64 => console.warn(Image));
  // data:image/png;base64,iVBORw0KGgoAA...