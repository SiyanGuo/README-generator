// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  The application is covered under ${data.license}.

  ## Contributing
  ${data.contributing}

  ## Questions
  [My Github Profile] (https://github.com/${data.github})
  I'm reachable via ${data.email}
`;
}

module.exports = generateMarkdown;
