import * as http from "http";
import * as express from "express";

const app = express();

const server = http.createServer(app);

server.listen(3000);
