getBadge = (license) => {
    //depending on the license type, return the badge
    if(license === 'MIT') {
        return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


        `
    } else if(license === 'Apache') {
        return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `
    } else if (license === 'GNU') {
        return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        `
    } else if (license === 'Mozilla') {
        return `
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
        `
    } else if(license === "Open Data Commons") {
        return `
    [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
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
[License](#License)

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
Please feel free to contact me at ${email}, and have a look at my other projects at my GitHub account
at [GitHub](https://github.com/${rest.userName}).


    `;
};