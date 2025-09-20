import { Request, Response } from "express";
import ApiError from "../errors/ApiError";

const errorHandlingMiddleware = (
  err: any,
  _: Request,
  res: Response,
  next: Function
) => {
  if (err instanceof ApiError) {
    let message;
    if (err.errors?.array().length) {
      const errors = err.errors.array().map((e: any) => e.msg);
      message = {
        errors,
      };
    }
    else if (err.message){
      message = { error: err.message }
    }
    return res.status(err.status).json(message);
  }
  return res.status(500).json({ error: "Internal server error" });
};

export default errorHandlingMiddleware;
