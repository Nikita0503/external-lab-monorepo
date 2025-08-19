import { SPRINTS } from "@external-lab-monorepo/constants";
import { Request, Response } from "express";
import { initApp, initSequelize } from "./utils/init";

const PORT = 4000;
const app = initApp();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: SPRINTS.SPRINT_3 });
});

app.listen(PORT, async () => {
  await initSequelize();
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
