import sharp from "sharp";
import fs from "fs";
import path from "path";

const input = path.resolve("icons/base_social-2400x1260.png");
const outDir = path.resolve("dist/social");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

await sharp(input).resize(1200, 630).png().toFile(`${outDir}/og-1200x630.png`);

await sharp(input).resize(600, 315).png().toFile(`${outDir}/og-600x315.png`);

await sharp(input)
  .resize(1200, 630)
  .png()
  .toFile(`${outDir}/twitter-1200x630.png`);

console.log("Generated social images.");
