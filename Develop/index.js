const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the project name? (Required',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your projects.',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions.',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log("Please enter installation instructions!");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instructions.',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contribution instructions.',
            validate: contributeInput => {
                if(contributeInput) {
                    return true;
                } else {
                    console.log('Please enter contribution instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter testing instructions.',
            validate: testsInput => {
                if(testsInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: [
                'MIT',
                'Apache',
                'GPL'
            ]
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Enter your GitHub Username.',
            validate: userNameInput => {
                if(userNameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
    ]);
};


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

questions()
.then(answers => {
    console.log(answers);
});
