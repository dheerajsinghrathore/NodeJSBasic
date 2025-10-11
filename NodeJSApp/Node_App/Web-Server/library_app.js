const http = require("http");
const PORT = 3000;
let books = [
  { bookname: "Book1", author: "Author1" },
  { bookname: "Book2", author: "Author2" },
  { bookname: "Book3", author: "Author3" },
];
let authors = [
  { authorname: "Author1" },
  { authorname: "Author2" },
  { authorname: "Author3" },
];
const requestListener = (request, response) => {
  if (request.url === "/books") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(books)); // Sending JSON response
  } else if (request.url === "/authors") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(authors)); // Sending JSON response
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Route Not Found");
  }
};
const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`Server Started at port ${PORT}`);
