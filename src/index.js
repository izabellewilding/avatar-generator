const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
const path = require("path");
const fs = require("fs");

const folderNames = ["clothes", "eyebrow", "eyes", "mouth", "nose", "top"];

const folderPaths = folderNames.map((folderName) => {
  return path.join(__dirname, `assets/${folderName}`);
});

function selectAssets(folder) {
  const files = fs.readdirSync(folder) 
      // Randomly choose an image from the folder
    const chosenFile = files[Math.floor(Math.random() * files.length)];
    return chosenFile
}

const selectedAssetsPaths = folderPaths.map((folderPath) => {const asset = selectAssets(folderPath)
return `${folderPath}/${asset}`
});

mergeImages(selectedAssetsPaths, {
    Canvas: Canvas,
    Image: Image
  })
    .then(b64 => console.warn(b64));


//TODO: Output number of avatars into folder at a time to display on web page 


