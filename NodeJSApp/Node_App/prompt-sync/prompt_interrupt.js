const prompt = require('prompt-sync')({sigint: true});  // Enable SIGINT handling
// signal handling for Ctrl+C
const chalk = require('chalk');

try {
    let firstNum = prompt('Enter first number: ');
    let secondNum = prompt('Enter second number: ');

    if (isNaN(firstNum) || isNaN(secondNum)) {
        throw new Error('Invalid input. Please enter numeric values only.');
    }

    let sum = Number(firstNum) + Number(secondNum);
    console.log(chalk.green(`The sum of ${firstNum} and ${secondNum} is: ${sum}`));
} catch (error) {
    console.log(chalk.red(error.message));
}