import ApiError from "../errors/ApiError";

import { NextFunction, Request, Response } from "express";

const adminRoleCheckMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const securityHeader = req.headers.security;
    if (!securityHeader || securityHeader !== "protected") {
      return next(
        ApiError.forbidden("User does not have access to this resource")
      );
    }
    next();
  } catch (e) {
    next(ApiError.forbidden("User does not have access to this resource"));
  }
};

export default adminRoleCheckMiddleware;
