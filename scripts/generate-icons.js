import sharp from "sharp";
import fs from "fs";
import path from "path";

const baseIcon = path.resolve("icons/base_icon-2048x2048.png");
const outputDir = path.resolve("dist/icons");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const sizes = [16, 32, 48, 72, 96, 144, 192, 512];

sizes.forEach((size) => {
  sharp(baseIcon)
    .resize(size, size)
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`))
    .then(() => console.log(`Generated icon-${size}x${size}.png`));
});

//  generate favicon.ico
sharp(baseIcon)
  .resize(32, 32)
  .toFile(path.join(outputDir, "favicon.ico"))
  .then(() => console.log("Generated favicon.ico"));
