

const fs = require('fs');
const path = require('path');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const extensionFolders = new Set();

  files.forEach(file => {
    const ext = path.extname(file);
    extensionFolders.add(ext.toUpperCase());
  });

  extensionFolders.forEach(extension => {
    const folderName = `${extension.substring(1)}_FILES`;
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  });

  files.forEach(file => {
    const ext = path.extname(file).toUpperCase();
    const folderName = `${ext.substring(1)}_FILES`;
    fs.rename(file, `${folderName}/${file}`, err => {
      if (err) {
        console.error(err);
      }
    });
  });
  console.log(extensionFolders)
});

