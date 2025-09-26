import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "expand",
      name: "gender",
      message: "What is your gender?",
      choices: [
        { key: "m", value: "male" },
        { key: "f", value: "female" },
        { key: "o", value: "other" },
      ],
    },
    {
      type: "checkbox",
      name: "favColors",
      message: "Select your favorite colors:",
      choices: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
