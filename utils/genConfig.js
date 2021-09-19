const fs = require("fs");
const path = require("path");

const data = [];

const json = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "models", "config.json"), "utf8")
);

function manageDir(dir) {
  fs.readdirSync(dir, {
    withFileTypes: true,
  }).forEach((file) => {
    if (file.isDirectory()) return manageDir(path.join(dir, file.name));
    if (!["index.json"].includes(file.name)) return;
    Object.entries(require(path.join(dir, file.name))).forEach(
      ([key, value], i) => {
        data.push({
          id:
            Object.entries(json).find(([k]) => k === key)?.[1].id ??
            Math.random().toString(36).substr(2, 10),
          animate: value.animate || false,
          title: value.title,
          description: value.description,
          url:
            path.relative(process.cwd(), dir).replace(/\\/g, "/") + "/" + key,
          tags: [...dir.split(/\/|\\/).slice(4)],
        });
      }
    );
  });
}
manageDir(path.join(__dirname, "models"));
fs.writeFileSync(
  path.join(process.cwd(), "models", "config.json"),
  JSON.stringify(data, null, 2)
);
