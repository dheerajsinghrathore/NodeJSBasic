import EventEmitter from "events";

const emitterObj = new EventEmitter();

let display = () =>{
    console.log(`greet`);
}
// Define a custom event
emitterObj.on("greet", (display) => {
  console.log(`Hello,`);
});

// Emit the custom event
emitterObj.emit("greet", "Alice");
emitterObj.removeListener("greet", display);
emitterObj.emit("greet", "Alice");
emitterObj.emit("greet", "Alice");
emitterObj.emit("greet", "Alice");
export default emitterObj;
