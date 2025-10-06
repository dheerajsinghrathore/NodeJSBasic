const http = require("http");
const PORT = 3000;
const requestListener = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello from Dheeraj\n");
  response.end();
  // console.log(`Request received from Browser`);
};
const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`Server Started at port ${PORT}`);
