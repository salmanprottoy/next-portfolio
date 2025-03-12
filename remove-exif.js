const sharp = require("sharp");
const inputPath = "public/images/banglacar.jpg";
const tempOutputPath = "public/images/banglacar_temp.jpg";
const fs = require("fs");

sharp(inputPath)
  .withMetadata({ orientation: null }) // Remove EXIF orientation
  .toFile(tempOutputPath)
  .then(() => {
    fs.renameSync(tempOutputPath, inputPath);
    console.log("EXIF metadata removed successfully.");
  })
  .catch((err) => {
    console.error("Error removing EXIF metadata:", err);
  });
