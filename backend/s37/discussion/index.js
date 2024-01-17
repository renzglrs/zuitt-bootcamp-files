let http = require("http");
let port = 4002;

const app = http
  .createServer(function (request, response) {
    if (request.url == "/greeting") {
      response.writeHead(200, { "Content-Type": "text/plain" });

      response.end("Hello World!");
    } else if (request.url == "/homepage") {
      response.writeHead(200, { "Content-Type": "text/plain" });

      response.end("This is the home page!");
    } else if (request.url == "/items" && request.method == "POST") {
      response.writeHead(200, { "Content-Type": "text/plain" });

      response.end("Created an item!");
    }
  })
  .listen(port);

console.log(`Server is running at localhost:${port}`);
