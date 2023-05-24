const inquirer = require('inquirer');

async function promptForLogo() {
    const text = await inquirer.prompt({
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => input.length <= 3,
    });

    const textColor = await inquirer.prompt({
        type: 'input',
        name: 'color',
        message: 'Enter test color, name or hexadecimal:',
    });

    const shape = await inquirer.prompt({
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    });

    const shapeColor = await inquirer.prompt ({
        type: 'input',
        name: 'color',
        message: `Enter the ${shape.shape.toLowerCase()} color (name or hexadecimal):`,
    });
  
    return { text: text.text, textColor: textColor.color, shape: shape.shape, shapeColor: shapeColor.color };
  }

module.exports = promptForLogo;