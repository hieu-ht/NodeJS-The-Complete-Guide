import * as express from "express";
import * as path from "path";

import { Middleware } from "../typing";
import rootDir from "../utils/rootDir";

const router = express.Router();

router.get(
  "/",
  (req, res, next): Middleware => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));

    return;
  }
);

export default router;
