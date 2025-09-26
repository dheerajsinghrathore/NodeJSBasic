import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "password",
      name: "pwd",
      message: "What is your password?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
