const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

mergeImages(['./BlazerShirt.svg', './Close.svg', './Concerned.png'], {
  Canvas: Canvas,
  Image: Image
})
  .then(b64 => console.warn(Image));
  // data:image/png;base64,iVBORw0KGgoAA...