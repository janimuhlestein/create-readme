getBadge = (license) => {
    if(license === 'MIT') {
        return `
        ![GitHub](https://img.shields.io/github/license/janimuhlestein/SongNews?style=plastic)
        `
    } else if(license === 'Apache') {
        return `
        ![AUR license](https://img.shields.io/aur/license/android-studio)
        `
    }

};


module.exports = generatePage = data=> {
    //console.log(data);
    //destructure email and license for special treatment
    const {email, license, ...rest} = data;
    console.log(data);
    return `
# ${rest.name} ${getBadge(license)}

## Description
${rest.description}

## Table of Contents
[Installation](#installation)
[Usage](#Usage)
[License](#Liicense)

## Installation
${rest.installation}

## Usage
${rest.usage}

## License
${license}

## Collaborate
${rest.contribute}

## Credits
${rest.credit}

## Tests
${rest.tests}

## Questions


    `;
};