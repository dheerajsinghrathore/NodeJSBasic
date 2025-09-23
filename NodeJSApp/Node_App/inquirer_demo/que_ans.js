import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?',
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your password:',
    mask: '*',
  },
  {
    type: 'list',
    name: 'color',
    message: 'Choose your favorite color:',
    choices: ['Red', 'Green', 'Blue', 'Yellow'],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nYour Answers:');
  console.log(`Username: ${answers.username}`);
  console.log(`Password: ${'*'.repeat(answers.password.length)}`); // Masked display
  console.log(`Favorite Color: ${answers.color}`);
}).catch((error) => {
  if (error.isTtyError) {
    console.error('Prompt couldn\'t be rendered in the current environment.');
  } else {
    console.error('Something went wrong:', error);
  }
});