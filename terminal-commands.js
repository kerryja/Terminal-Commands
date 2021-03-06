const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file}`;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.writeFile('new-file.txt', 'description', 'utf8', (err) => {
        if (err) throw err;

        console.log('file creation success');
    })
  };
  
  module.exports.mkdir = () => {
    fs.mkdir('/', (err) => {
        if (err) throw err;
    })
  };