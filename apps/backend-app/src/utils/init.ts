import cors from "cors";
import express, { Express } from "express";
import fileUpload from "express-fileupload";
import path from "path";
import sequelize from "../db";
import errorHandler from "../middlewares/errorHandlingMiddleware";
import rootRouter from "../sprints";

const MAX_RETRIES = 5;
const DELAY = 1000;

export const initApp = (dirname: string): Express => {
  console.log(dirname);
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.resolve(dirname, "..", "static")));
  app.use(fileUpload({}));
  app.use("/api", rootRouter);
  app.use(errorHandler);
  return app;
};

const checkDatabaseConnection = async () => {
  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      await sequelize.authenticate();
      console.log("🟢 Database connection established");
      return;
    } catch (error) {
      retries++;
      console.log(
        `🟡 Database connection failed. Retrying... (${retries}/${MAX_RETRIES})`
      );
      await new Promise((resolve) => setTimeout(resolve, DELAY));
    }
  }
  throw new Error(
    "🔴 Unable to connect to the database after several attempts"
  );
};

export const initSequelize = async () => {
  await checkDatabaseConnection();
  await sequelize.sync();
};
