const fs = require("fs");

const addHeader = (file, arrHeaders) => {
  let status = true;
  try {
    let str = arrHeaders.join(", ");
    fs.writeFileSync(file, str + "\n");
    console.log("File created successfully.");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("Directory not found.", err.code);
      status = false;
    }
  } finally {
    console.log("Bye.");
    return status;
  }
};

const addItems = (file, arrItems) => {
  let status = true;
  let str = "";
  try {
    for (let item of arrItems) {
      str += `\n${item.name}, ${item.qty}, ${item.price}`;
    }
    fs.appendFileSync(file, str + "\n");
    console.log("Data appended successfully.");
  } catch (err) {
    console.log("File not appended successfully.", err.code);
    status = false;
  } finally {
    console.log("Bye.");
    return status;
  }
};

const showItems = (file, arrItems) => {
  try {
    let data = fs.readFileSync(file, "utf8");

    console.log(data);
  } catch (err) {
    console.log("File not read successfully.", err.code);
  } finally {
    console.log("Bye.");
  }
};

const main = () => {
  let file = "text_files/grocery.csv";
  let arrHeaders = ["Name", "Quantity", "Price"];

  let status = addHeader(file, arrHeaders);
  if (status) {
    let arrItems = [
      { name: "Pen", qty: 10, price: 20 },
      { name: "Pencil", qty: 5, price: 10 },
      { name: "Eraser", qty: 8, price: 5 },
      { name: "Sharpener", qty: 4, price: 15 },
    ];
    status = addItems(file, arrItems);
    if (status) {
      showItems(file, arrItems);
    }
  }
};

main();
