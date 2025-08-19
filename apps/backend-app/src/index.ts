import { Request, Response } from "express";
import { initApp, initSequelize } from "./utils/init";

import { AUTH_HEADER } from "@external-lab-monorepo/api";
import { SPRINTS } from "@external-lab-monorepo/constants";
import { authReducer } from "@external-lab-monorepo/store";
import { TASK } from "@external-lab-monorepo/types";

const PORT = 4000;
const app = initApp();

app.get("/", (req: Request, res: Response) => {
  res.json({
    m1: AUTH_HEADER,
    m2: SPRINTS.SPRINT_3,
    m3: authReducer,
    m4: TASK,
  });
});

app.listen(PORT, async () => {
  await initSequelize();
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
