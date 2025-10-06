const http = require("http");
const server = http.createServer();
const PORT = 3000;

server.on("connection", () => {
  console.log(`Request received`);
});

server.listen(PORT);
console.log(`Server Started at port ${PORT}`);
