import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("timer", (seconds) => {
  console.log(`Timer done: ${seconds} seconds`);
});
let time = 1;
setInterval(() => {
  emitter.emit("timer", time);
  time++;
}, 1000);
export default emitter;
