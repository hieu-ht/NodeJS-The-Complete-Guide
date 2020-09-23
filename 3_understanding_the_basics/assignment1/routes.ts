import * as http from "http";

const requestHandler = (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Enter user</title></head>");
    response.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form></body>"
    );
    response.write("</html>");
    return response.end();
  }

  if (url === "/users") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Users</title></head>");
    response.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    response.write("</html>");
    return response.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    request.on("data", (chunk) => {
      console.log("chunk: ", chunk);
      body.push(chunk);
    });

    request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      console.log("parsedBody: ", parsedBody);
    });
    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }
};

export default requestHandler;
