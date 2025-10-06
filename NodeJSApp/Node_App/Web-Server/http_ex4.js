const http = require("http");
const PORT = 3000;
const requestListener = (request, response) => {
  console.log(`Request received from Browser`);
};
const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`Server Started at port ${PORT}`);
