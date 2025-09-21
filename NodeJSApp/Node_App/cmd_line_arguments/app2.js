let arr = process.argv;
console.log(arr);
if (arr.length === 2) {
  console.log(`Good evening Guest!`);
  process.exit();
}
console.log("Arguments are:~");
for (let i = 2; i < arr.length; i++) {
  console.log(`Good evening ${arr[i]}`);
}
