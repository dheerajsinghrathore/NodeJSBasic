const http = require("http");
const PORT = 3000;
const fsPromises = require("fs").promises;
const requestListener = async (request, response) => {
  fsPromises.readFile("index.html", "utf-8").then((data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(data); // Sending HTML response from index.html file
  }).catch((err) => {
    let msg = ""
    switch (err.code) {
      case "ENOENT":
        msg = "File Not Found";
        response.writeHead(404, { "Content-Type": "text/plain" });
        break;
      case "EACCES":
        msg = "Permission Denied";
        response.writeHead(403, { "Content-Type": "text/plain" });
        break;
      default:
        msg = "Internal Server Error";
        response.writeHead(500, { "Content-Type": "text/plain" });
    }
    response.end(msg);
  });
};
const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`Server Started at port ${PORT}`);

