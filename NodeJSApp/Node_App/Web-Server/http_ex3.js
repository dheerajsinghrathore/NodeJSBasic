const http = require("http");
const PORT = 3000;
const server = http.createServer((request, response) => {
  console.log(`Request received from Browser`);
});
server.listen(PORT);
console.log(`Server Started at port ${PORT}`);
