"use strict";
exports.__esModule = true;
var fs = require("fs");
var requestHandler = function (request, response) {
    // console.log(request);
    // console.log("url: ", request.url);
    // console.log("method: ", request.method);
    // console.log("headers: ", request.headers);
    var url = request.url;
    var method = request.method;
    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>Enter message</title></head>");
        response.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        response.write("</html>");
        return response.end();
    }
    if (url === "/message" && method === "POST") {
        var body_1 = [];
        request.on("data", function (chunk) {
            console.log("chunk: ", chunk);
            body_1.push(chunk);
        });
        request.on("end", function () {
            var parsedBody = Buffer.concat(body_1).toString();
            var message = parsedBody.split("=")[1];
            console.log("parsedBody: ", parsedBody);
            fs.writeFile("message.txt", message, function (err) {
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
exports["default"] = requestHandler;
