let arr = process.argv;
if (arr.length < 4) {
  console.log(`Enter 2 numbers for add:~ `);
  process.exit();
}
let sum = 0;
for (let i = 2; i < arr.length; i++) {
  if (isNaN(arr[i])) {
    console.log(`Invalid input ${arr[i]} , Please enter numeric values only.`);
    process.exit();
  }
  sum += Number(arr[i]);
}
console.log(`Sum is: ${sum}`);
let average = sum / (arr.length - 2);
console.log(`Average is: ${average}`);
