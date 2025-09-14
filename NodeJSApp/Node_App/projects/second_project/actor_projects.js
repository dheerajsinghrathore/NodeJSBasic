const fs = require("fs");

const writeObject = (file, favActor) => {
  try {
    let favActorStr = JSON.stringify(favActor);
    fs.writeFileSync(file, favActorStr);
    console.log("Record created successfully.");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("Directory not found.", err.code);
    }
  } finally {
    console.log("Bye.");
  }
};

const readObject = (file) => {
  try {
    let favActorStr = fs.readFileSync(file, "utf8");
    let favActor = JSON.parse(favActorStr);
    console.log(
      `Name: ${favActor.name}, Age: ${favActor.age}, Movies: ${favActor.movies}`
    );
  } catch (err) {
    console.log("File not read successfully.", err.code);
  } finally {
    console.log("Bye.");
  }
};

const main = () => {
  let file = "actor.json";
  let favActor = { name: "Robert Downey Jr.", age: 58, movies: "ABCD" };
  writeObject(file, favActor);
  readObject(file);
};

main();
