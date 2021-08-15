// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license[0]) {
    case 'Apache':
      return `![Apache license](https://img.shields.io/hexpm/l/plug)`;

    case 'BSD':
      return `![BSD license](https://img.shields.io/pypi/l/Django)`;

    case 'EPL':
      return `![EPL license](https://img.shields.io/eclipse-marketplace/l/notepad4e)`;

    case 'MIT':
      return `![MIT](https://img.shields.io/github/license/SiyanGuo/README-generator)`;

    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license[0]) {
    case 'Apache':
      return `Read More: https://www.apache.org/licenses/LICENSE-2.0`;

    case 'BSD':
      return `Read More: https://opensource.org/licenses/BSD-3-Clause`;

    case 'EPL':
      return `Read More: https://opensource.org/licenses/EPL-2.0`;

    case 'MIT':
      return `Read More: https://opensource.org/licenses/MIT`;

    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }
  return `
    The application is covered under ${license}.
    `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)}
 
  ## Contributing
  ${data.contributing}

  ## Questions
  [My Github Profile](https://github.com/${data.github})
  If you have additional questions, I'm reachable via ${data.email}.
`;
}

module.exports = generateMarkdown;
