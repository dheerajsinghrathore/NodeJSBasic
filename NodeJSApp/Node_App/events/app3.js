import EventEmitter from "events";

const emitterObj = new EventEmitter();

// Define a custom event
emitterObj.on("greet", (user) => {
  console.log(`Hello, ${user}!`);
});

// Emit the custom event
emitterObj.emit("greet", {id: 1, name: "Alice"});
export default emitterObj;
