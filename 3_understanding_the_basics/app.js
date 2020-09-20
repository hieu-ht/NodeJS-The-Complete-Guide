"use strict";
exports.__esModule = true;
var http = require("http");
var routes_1 = require("./routes");
var server = http.createServer(routes_1["default"]);
server.listen(3000);
