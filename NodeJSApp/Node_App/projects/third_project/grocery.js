const fs = require("fs");

const addItems = (fileName, items) => {
  try {
    // Convert JS object to JSON string (pretty printed)
    const data = JSON.stringify(items, null, 2);
    fs.writeFileSync(fileName, data, "utf8");
    console.log("Items added successfully!");
    return true;
  } catch (err) {
    console.error("Error while adding items:", err.message);
    return false;
  }
};

const readItems = (fileName) => {
  try {
    if (!fs.existsSync(fileName)) {
      console.log("File not found!");
      return;
    }

    const data = fs.readFileSync(fileName, "utf8");
    const items = JSON.parse(data);

    console.log("Grocery Items:");
    let total = 0;

    items.forEach((item, index) => {
      let itemTotal = item.qty * item.price;
      console.log(`${index + 1}. ${item.name} - Qty: ${item.qty}, Price: ${item.price}, Total: ${itemTotal}`);
      total += itemTotal;
    });

    console.log(`\nTotal Bill = ₹${total}`);
  } catch (err) {
    console.error("Error while reading items:", err.message);
  }
};

const main = () => {
  let items = [
    { name: "Bread", qty: 4, price: 20 },
    { name: "Milk", qty: 2, price: 35 },
    { name: "Butter", qty: 3, price: 250 },
    { name: "Coffee", qty: 3, price: 40 },
  ];
  let fileName = "grocery.json";
  if (addItems(fileName, items)) {
    readItems(fileName);
  }
};

main();
