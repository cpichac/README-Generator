
import inquirer from 'inquirer';
import fs from "fs/promises";


let {title, description, license} = await inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like?',
      choices: ['MIT','Mozilla','Unlicense']
    }
    // Add more prompts for other sections of the README (e.g., installation, usage, etc.)
  ])
// Generate the README content
const readmeContent = `
# ${title}

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)


## Installation



## Usage


## License

${generateLicense(license)}


`;

// Write the README content to a file
fs.writeFile('README.md', readmeContent);


function generateLicense(license){

if(license === "MIT"){

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
else if(license === "Mozilla"){

    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
else if (license === "Unlicense"){

    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
}
