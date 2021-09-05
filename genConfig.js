const fs = require("fs");
const path = require("path");

function manageDir(dir) {
  const data = {};
  fs.readdirSync(dir, {
    withFileTypes: true,
  }).forEach((file) => {
    if (file.isDirectory()) return manageDir(path.join(dir, file.name));
    if (
      ["index.json", "config.json"].includes(file.name) ||
      file.name.endsWith(".tsx")
    )
      return;
    data[file.name] = {
      title: file.name.split(".")[0],
      description: "",
    };
  });
  fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify(data, null, 2));
}
manageDir(path.join(__dirname, "models"));
