let a = 10;
let b = 20;
console.log(`Sum is: - ${a + b}`);

const [count, setCount] = useState(0);

for (let i = 0; i < 5; i++) {
  setCount((prev) => prev + 1);
}

console.log(count);
