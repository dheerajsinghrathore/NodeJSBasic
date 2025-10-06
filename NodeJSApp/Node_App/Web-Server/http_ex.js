// 1. Import the http module
const http = require("http");

// 2. Create the server
const server = http.createServer((req, res) => {
  // Set header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Handle routes
  if (req.url === "/") {
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.end("About Us Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

// 3. Start the server on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
