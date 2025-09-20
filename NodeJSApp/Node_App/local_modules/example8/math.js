function area(radius) {
  let area = Math.PI * radius * radius;
  console.log(`Area is - ${area.toFixed(2)}`);
}
module.exports = area;  // exports the function directly, here area is the function being exported