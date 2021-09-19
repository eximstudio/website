const fs = require("fs");
const path = require("path");

function manageDir(dir) {
  let data = {};

  if (fs.existsSync(path.join(dir, "index.json"))) {
    data = JSON.parse(fs.readFileSync(path.join(dir, "index.json"), "utf8"));
  }

  fs.readdirSync(dir, { withFileTypes: true })
    .filter((f) => !["index.json", "config.json"].includes(f.name))
    .forEach((file) => {
      if (file.isDirectory()) return manageDir(path.join(dir, file.name));
      else {
        let config = Object.assign(
          data[file.name] || {
            name: file.name.replace(/\.\w+$/, ""),
            description: "",
            animate: false,
          }
        );
        let fileName = file.name
          .replace(/\s+(\.\w+)$/g, "$1")
          .replace(/\s+/g, "_");

        if (fileName !== file.name) {
          fs.renameSync(path.join(dir, file.name), path.join(dir, fileName));
          console.log(`${file.name} -> ${fileName}`);
        }

        config.name = fileName;

        if (data[file.name]) delete data[file.name];
        data[fileName] = config;
      }
    });

  if (Object.keys(data).length) {
    fs.writeFileSync(
      path.join(dir, "index.json"),
      JSON.stringify(data, null, 2)
    );
    return;
  } else return console.log(`Skipping ${dir} as it's an empty directory`);
}

manageDir(path.resolve(process.cwd(), "models"));
