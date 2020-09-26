const fs = require('fs');


// function to generate markdown for README
const generateMarkdown = data => {
  return new Promise((resolve, reject) => {
      fs.writeFile('../dist/readme.md', data, err => {
          if(err) {
              reject(err);
              //return out of the function
              return;
          }
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

module.exports = generateMarkdown;
