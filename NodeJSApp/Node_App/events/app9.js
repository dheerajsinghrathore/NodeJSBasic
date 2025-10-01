import EventEmitter from "events";

const emitterObj = new EventEmitter();

// Define a custom event
emitterObj.once("greet", () => {
  console.log(`Hello,`);
});

// Emit the custom event
emitterObj.emit("greet", "Alice");
emitterObj.emit("greet", "Alice");
emitterObj.emit("greet", "Alice");
emitterObj.emit("greet", "Alice");