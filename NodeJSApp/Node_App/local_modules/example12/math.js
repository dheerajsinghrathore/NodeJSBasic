const add = (x, y) => {
  return x + y;
};
const subtract = (x, y) => {
  return x - y;
}
exports = { add, subtract }; // This will not work because we are reassigning exports
// Correct way to export multiple functions
// module.exports = { add, subtract }; // Uncomment this line to make it work