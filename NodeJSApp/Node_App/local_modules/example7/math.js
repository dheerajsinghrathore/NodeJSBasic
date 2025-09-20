function area(radius) {
  let area = Math.PI * radius * radius;
  console.log(`Area is - ${area.toFixed(2)}`);
}
module.exports.area = area; // exports the function as a property of an object