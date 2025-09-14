const path = require("path");

console.log(__dirname); // current directory path
console.log(path.resolve("./")); // current file name
console.log(__filename); // current file path
console.log(path.join("India", "Bihar", "Patna")); // join paths
console.log(require.main); // main module
console.log(require.main === module); // true if run directly, false if required    
console.log(module); // current module