// Using the require directive, we are able to import the 'http' built-in package from node.js
let http = require("http");

let port = 4002;

// You can create a server by using the createServer() function from the http package. That function then contains an argument which is an anonymous funciton that handles both the request and reponse objects.
const app = http
  .createServer(function (request, response) {
    // The 'url' property comes from the request object and represents the current URL that is set in the browser.
    if (request.url == "/greeting") {
      // Using the writeHead() function, we are able to write the headers for the response. The first argument is usually the HTTP Status Code and the second argument is the actual content of the header.
      response.writeHead(200, { "Content-Type": "text/plain" });

      // Responsible for ending the response and returning the argument as the response data.
      // Note: the response data's type should match the 'Content-Type' that is set on the header.
      response.end("Hello World!");
    } else if (request.url == "/homepage") {
      response.writeHead(200, { "Content-Type": "text/plain" });

      response.end("This is the home page!");
    } else if (request.url == "/items" && request.method == "POST") {
      response.writeHead(200, { "Content-Type": "text/plain" });

      response.end("Created an item!");
    }
  })
  .listen(port); // Sets the specific port number where this server will run on.

console.log(`Server is running at localhost:${port}`);
