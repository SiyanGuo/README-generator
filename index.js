// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = data =>{
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/README.md', data, err =>{
           //if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
               reject (err);
               return;
           } 
           // if everything went well, resolve the Promise and send the successful data to the `.then()` method
           resolve ({
               ok: true,
               message:'File Created!'
           });
        });
    });
 }

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (required)',
            validate: titleInput => {
                if (titleInput) return true;
                else {
                    console.log("Please enter a title!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description. (required)',
            validate: descriptionInput => {
                if (descriptionInput) return true;
                else {
                    console.log("Please enter a description!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instruction.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license.',
            choices: ['MIT License', 'GNU', 'BSD', 'Eclipse']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter contribution guidelines.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
        },
    ])
}

// Function call to initialize app
init()
.then(answers => {
    return generateMarkdown(answers);
})
.then(fileData => {
    return writeToFile(fileData);
})
.then(writeFileResponse =>{
    console.log(writeFileResponse);
})
.catch(err =>{
    console.log(err);
})
