const fs = require('fs');


// function to actually write the file
const generateMarkdown = data => {
  return new Promise((resolve, reject) => {
      fs.writeFile('../dist/readme.md', data, err => {
          if(err) {
              reject(err);
              //return out of the function
              return;
          }
          resolve({
            //otherwise, we're good
              ok: true,
              message: 'File created!'
          });
      });
  });
};

module.exports = generateMarkdown;
