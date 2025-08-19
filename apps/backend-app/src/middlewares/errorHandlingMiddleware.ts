import { Request, Response } from "express";
import ApiError from "../errors/ApiError";

const errorHandlingMiddleware = (err: any, _: Request, res: Response) => {
  if (err instanceof ApiError) {
    let message = { message: err.message };
    if (err.errors) {
      message = {
        ...message,
        ...err.errors,
      };
    }
    return res.status(err.status).json(message);
  }
  return res.status(500).json({ message: "Unknown error :(" });
};

export default errorHandlingMiddleware;
