import * as express from "express";
import * as path from "path";
import { Request, Response, NextFunction } from "express";

import rootDir from "../utils/rootDir";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));

  return;
});

export default router;
