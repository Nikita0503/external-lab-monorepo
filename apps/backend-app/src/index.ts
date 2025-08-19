import { TEST_CONSTANT } from "@external-lab-monorepo/api";
import { Request, Response } from "express";
import { initApp, initSequelize } from "./utils/init";

const PORT = 4000;
const app = initApp();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: TEST_CONSTANT });
});

app.listen(PORT, async () => {
  await initSequelize();
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
