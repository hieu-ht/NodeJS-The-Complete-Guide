import * as express from "express";
import * as path from "path";

import { Middleware } from "../typing";
import rootDir from "../utils/rootDir";

const router = express.Router();

router.get(
  "/add-product",
  (req, res, next): Middleware => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
    return;
  }
);

router.post(
  "/add-product",
  (req, res, next): Middleware => {
    console.log(req.body);
    res.redirect("/");
    return;
  }
);

export default router;
