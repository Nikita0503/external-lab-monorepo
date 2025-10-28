import express, { NextFunction, Request, Response } from "express";
import sprint1Router from "./sprint1/routes";
import sprint2Router from "./sprint2/routes";
import sprint3Router from "./sprint3/routes";
import sprint4Router from "./sprint4/routes";

const app = express();

const sprintRouter = (req: Request, res: Response, next: NextFunction) => {
  const sprint = req.header("sprint");
  switch (sprint) {
    case "1":
      return sprint1Router(req, res, next);
    case "2":
      return sprint2Router(req, res, next);
    case "3":
      return sprint3Router(req, res, next);
    case "4":
      return sprint4Router(req, res, next);
    default:
      return sprint4Router(req, res, next);
  }
};

app.use("/", sprintRouter);

export default app;
