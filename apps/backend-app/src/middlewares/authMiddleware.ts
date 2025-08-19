import jwt from "jsonwebtoken";
import ApiError from "../errors/ApiError";

import { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(ApiError.unauthorized());
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return next(ApiError.unauthorized());
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string); // Use actual secret key from env
    (req as any).user = decoded;
    next();
  } catch (e) {
    next(ApiError.unauthorized());
  }
};

export default authMiddleware;
