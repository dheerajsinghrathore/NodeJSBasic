let arr = process.argv;
const chalk = require("chalk");
if (arr.length < 4) {
  console.log(chalk.blue(`Enter 2 numbers for add:~ `));
  process.exit();
}
try {
  let sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      console.log(
        chalk.red(`Invalid input ${arr[i]} , Please enter numeric values only.`)
      );
      process.exit();
    }
    sum += Number(arr[i]);
  }
  console.log(chalk.green(`Sum is: ${sum}`));
  let average = sum / (arr.length - 2);
  console.log(chalk.green(`Average is: ${average}`));
} catch (error) {
  console.log(chalk.red(error.message));
}
