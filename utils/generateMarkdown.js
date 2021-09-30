// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contritbuting](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.installCommand}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contribute}

  ## Tests

  To run tests, run the following command:

  ${data.testCommand}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.name}](https://github.com/${data.name}).
`;
}

module.exports = generateMarkdown;

// sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions