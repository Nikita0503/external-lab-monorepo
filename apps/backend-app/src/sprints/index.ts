import { SPRINTS } from "@external-lab-monorepo/constants";
import express, { NextFunction, Request, Response } from "express";
import sprint1Router from "./sprint1/routes";
import sprint2Router from "./sprint2/routes";
import sprint3Router from "./sprint3/routes";
import sprint4Router from "./sprint4/routes";

const app = express();

const sprintRouter = (req: Request, res: Response, next: NextFunction) => {
  const sprint = req.header("sprint");
  switch (sprint) {
    case SPRINTS.SPRINT_1:
      return sprint1Router(req, res, next);
    case SPRINTS.SPRINT_2:
      return sprint2Router(req, res, next);
    case SPRINTS.SPRINT_3:
      return sprint3Router(req, res, next);
    case SPRINTS.SPRINT_4:
      return sprint4Router(req, res, next);
    default:
      return sprint4Router(req, res, next);
  }
};

app.use("/", sprintRouter);

export default app;
