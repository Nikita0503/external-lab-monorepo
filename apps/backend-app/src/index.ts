import express, { Request, Response } from "express";

const app = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello Turbo Monorepo Backend!" });
});

app.listen(port, () => {
  console.log(`🚀 Backend running at http://localhost:${port}`);
});
