import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content");

const site = JSON.parse(
  fs.readFileSync(path.join(CONTENT_DIR, "site.json"), {
    encoding: "utf-8",
  }),
);

const manifest = {
  name: site.title,
  short_name: site.title_short,
  start_url: ".",
  display: "fullscreen",
  background_color: site.background,
  theme_color: site.theme,
  icons: [
    { src: "./icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
    { src: "./icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
    { src: "./icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
    { src: "./icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
    { src: "./icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "./icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
  ],
};

fs.writeFileSync(
  path.resolve("dist/manifest.json"),
  JSON.stringify(manifest, null, 2),
);
console.log("Generated manifest.json");
