import inquirer from "inquirer";

inquirer.prompt([
  {
    type: "list",
    name: "favMovie",
    message: "What is your favorite movie?",
    choices: ["Inception", "Interstellar", "The Dark Knight", "Tenet"],
    default: "Inception",
  },
  {
    type: "checkbox",
    name: "favColors",
    message: "Select your favorite colors:",
    choices: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
  },
]).then((answers) => {
  console.log(answers);
});