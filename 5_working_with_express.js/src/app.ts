import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import { Request, Response, NextFunction } from "express";

import rootDir from "./utils/rootDir";

import adminRouter from "./routes/admin";
import shopRouter from "./routes/shop";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  return;
});

app.listen(3000);
