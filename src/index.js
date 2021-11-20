const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
const path = require("path");
const fs = require("fs");

//joining path of directory
// const clothes = path.join(__dirname, 'assets/clothes');
// const eyebrow = path.join(__dirname, 'assets/eyebrow');
// const eyes = path.join(__dirname, 'assets/eyebrow');
// const mouth = path.join(__dirname, 'assets/mouth');
// const nose = path.join(__dirname, 'assets/node');
// const top = path.join(__dirname, 'assets/top')

//passsing directoryPath and callback function
// fs.readdir(clothes, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//         // Randomly choose an image from the folder
//     const chosenFile = files[Math.floor(Math.random() * files.length)]

//     mergeImages( [path.join(__dirname, `assets/clothes/${chosenFile}`)], {
//         Canvas: Canvas,
//         Image: Image
//       })
//         .then(b64 => console.warn(b64));
//         // data:image/png;base64,iVBORw0KGgoAA...

//     console.log(chosenFile);
// });

const folderNames = ["clothes", "eyebrow"];

const folderPaths = folderNames.map((folderName) => {
  return path.join(__dirname, `assets/${folderName}`);
});

function selectAssets(folder) {
  const files = fs.readdirSync(folder) 
      // Randomly choose an image from the folder
    const chosenFile = files[Math.floor(Math.random() * files.length)];

    console.warn("chosen file", chosenFile);
    return chosenFile
  
//   function (err, files) {
//     //handling error
//     if (err) {
//       return console.log("Unable to scan directory: " + err);
//     }

//   });
}

const arr = [];

const assets = folderPaths.map((folderPath) => selectAssets(folderPath));

console.log(assets, folderPaths,  "assets");

// const selectedEyebrows = selectAssets(eyebrow)

// console.log(selectedClothes, 'selected');

mergeImages(assets, {
    Canvas: Canvas,
    Image: Image
  })
    .then(b64 => console.warn(b64));

// console.log(selectedClothes, 'selected clothes ')
// selectAssets(eyes)
// selectAssets(mouth)
// selectAssets(nose)
// selectAssets(top)
