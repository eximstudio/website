const fs = require("fs");
const path = require("path");

const data = [];

function manageDir(dir) {
  fs.readdirSync(dir, {
    withFileTypes: true,
  }).forEach((file) => {
    if (file.isDirectory()) return manageDir(path.join(dir, file.name));
    if (!["index.json"].includes(file.name)) return;
    Object.entries(require(path.join(dir, file.name))).forEach(
      ([key, value]) => {
        data.push({
          title: value.title,
          description: value.description,
          url: path.relative(process.cwd(), dir) + "/" + key,
          tags: [...dir.split("/").slice(4)],
        });
      }
    );
  });
}
manageDir(path.join(__dirname, "public/models"));
fs.writeFileSync(
  path.join("public/models", "config.json"),
  JSON.stringify(data, null, 2)
);
