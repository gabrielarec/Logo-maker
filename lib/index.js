const fs = require('fs');
const { Triangle, Circle, Square} = require ('/lib/shapes');
const promptForLogo = require ('./lib/user-input');
const inquirer =  require('inquirer');

async function generateLogo() {
    const {text, textColor, shape, shapeColor} = await promptForLogo();
let shapeObject;

switch (shape) {
    case 'Triangle':
    shapeObject = new Triangle ();
    break;
    case 'Circle':
    shapeObject = new Circle ();
    break;
    case 'Square':
    shapeObject = new Square ();
    break;
    default:
    console.error('Invalid shape:', shape);
    process.exit(1);    
}

shapeObject.setColor(shapeColor);

const logoSvg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
${shapeObject.render()}
<text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;

fs.writeFileSync('examples/logo.svg', logoSvg);

console.log('Generated logoSvg.svg');
}

generateLogo();