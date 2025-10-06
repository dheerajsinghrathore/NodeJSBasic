const http = require("http");
const PORT = 3000;
const requestListener = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello from Dheeraj</h1>");    // Sending HTML response
};
const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`Server Started at port ${PORT}`);
