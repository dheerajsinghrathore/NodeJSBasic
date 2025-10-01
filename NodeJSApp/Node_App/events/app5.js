import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("onRegister", (seconds) => {
  console.log(`Heillo`);
});
emitter.on("onRegister", (seconds) => {
  console.log(`Hi`);
});
emitter.on("onRegister", (seconds) => {
  console.log(`Heihhhhllo`);
});

emitter.emit("onRegister");
export default emitter;
