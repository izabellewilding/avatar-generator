const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
const path = require("path");
const fs = require("fs");

const folderNames = [
  "background",
  "skin",
  "eyebrow",
  "eyes",
  "mouth",
  "nose",
  "top",
  "clothes",
  "accessories",
];

const folderPaths = folderNames.map((folderName) => {
  return path.join(__dirname, `assets/${folderName}`);
});

function generateRandomImage(id) {
  function selectAssets(folder) {
    const files = fs.readdirSync(folder);
    // Randomly choose an image from the folder
    const randomFile = files[Math.floor(Math.random() * files.length)];
    return randomFile;
  }

  const selectedAssetsPaths = folderPaths.map((folderPath) => {
    const asset = selectAssets(folderPath);
    return `${folderPath}/${asset}`;
  });

  mergeImages(selectedAssetsPaths, {
    Canvas: Canvas,
    Image: Image,
  }).then((b64) => {
    console.warn(selectedAssetsPaths);

    const base64Data = b64.replace(/^data:image\/png;base64,/, "");

    fs.writeFile(
      __dirname + `/output/avatar-${id}.png`,
      base64Data,
      "base64",
      function (err) {
        console.log(err);
      }
    );
  });
}

Array(1000)
  .fill()
  .map((_, arrayIndex) => {
    generateRandomImage(arrayIndex);
  });

//TODO: Output number of avatars into folder at a time to display on web page
//TODO: Skin & BGs
