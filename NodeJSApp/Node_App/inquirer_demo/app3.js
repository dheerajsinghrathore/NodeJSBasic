import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "favMovie",
      message: "What is your favorite movie?",
      default: "Inception",
    },
    {
      name: "favColor",
      message: "What is your favorite color?",
      default: "Blue",
    },
  ])
  .then((answers) => {
    // console.log(`Oh, so your favorite movie is ${answers.favMovie}`);
    console.log(answers);
  });
