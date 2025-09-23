import inquirer from "inquirer";

inquirer
  .prompt([{ name: "favMovie", message: "What is your favorite movie?" }])
  .then((answers) => {
    // console.log(`Oh, so your favorite movie is ${answers.favMovie}`);
    console.log(answers);
  });
