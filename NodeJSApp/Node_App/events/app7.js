import EventEmitter from "events";

const emitter = new EventEmitter();

function counter(seconds) {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    emitter.emit("update", count);
    if (count >= seconds) {
      clearInterval(interval);
      emitter.emit("end");
    } else if (count === seconds - 2) {
      emitter.emit("end-soon");
    }
  }, 1000);
}
counter(20);
emitter.on("update", (seconds) => {
  console.log(`${seconds} passed`);
});
emitter.on("end", () => {
  console.log(`Time over`);
});

emitter.on("end-soon", () => {
  console.log(`2 seconds to end`);
});
