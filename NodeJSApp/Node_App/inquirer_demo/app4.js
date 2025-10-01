import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter a valid URL",
    },
    {
      type: "checkbox",
      name: "format",
      message: "Select image format : ",
      choices: ["png", "svg", "jpg"],
    },
  ])
  .then((answer) => {
    console.log(answer);
  });
