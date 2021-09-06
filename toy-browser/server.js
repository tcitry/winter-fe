const http = require("http");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.log("error", err);
      })
      .on("data", (chunk) => {
        body.push(chunk.toString());
      })
      .on("end", () => {
        // The "list[0]" argument must be an instance of Buffer or Uint8Array.
        // body = Buffer.concat(body).toString();
        // console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("Hello World\n");
      });
  })
  .listen(8000);

console.log("server started");
