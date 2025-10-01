
import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("login", () => {
  console.log(`Login called`);
});
emitter.on("logout", () => {
  console.log(`Logout called`);
});
emitter.emit("login");
emitter.emit("logout");

