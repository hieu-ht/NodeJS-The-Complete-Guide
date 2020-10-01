import * as http from "http";
import * as fs from "fs";

const requestHandler = (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  // console.log(request);
  // console.log("url: ", request.url);
  // console.log("method: ", request.method);
  // console.log("headers: ", request.headers);

  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Enter message</title></head>");
    response.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    response.write("</html>");
    return response.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    request.on("data", (chunk) => {
      console.log("chunk: ", chunk);
      body.push(chunk);
    });

    request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      console.log("parsedBody: ", parsedBody);
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log("Failed to write file", err);
          response.end();
          return;
        }
        response.statusCode = 302;
        // response.setHeader("Location", "/");
        return response.end();
      });
      // fs.writeFileSync("message.txt", "DUMMY");
    });
  }

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>My first page</title></head>");
  response.write("<body><h1>Hello from my Node.js</h1></body>");
  response.write("</html>");
  response.end();
  // process.exit();
};

export default requestHandler;
