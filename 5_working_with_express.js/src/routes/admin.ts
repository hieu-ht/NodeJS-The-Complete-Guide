import * as express from "express";
import * as path from "path";
import { Request, Response, NextFunction } from "express";

import rootDir from "../utils/rootDir";

const router = express.Router();

router.get(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
    return;
  }
);

router.post(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    res.redirect("/");
    return;
  }
);

export default router;
