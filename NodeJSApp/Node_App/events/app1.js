import EventEmitter from "events";

const emitterObj = new EventEmitter();

// Define a custom event
emitterObj.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the custom event
emitterObj.emit("greet", "Alice");

emitterObj.emit("greet", "Alice");
emitterObj.emit("greet", "Alice");
emitterObj.emit("greet", "Alice");
export default emitterObj;

// Export the emitter object for use in other modules
export { emitterObj };

// Example of using the emitter in another file
// import { emitterObj } from './path_to_this_file';
// emitterObj.emit('greet', 'Bob'); // This will log "Hello, Bob!" to the console.