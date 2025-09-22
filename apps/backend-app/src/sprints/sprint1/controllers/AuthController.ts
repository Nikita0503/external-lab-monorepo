import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import ApiError from "../../../errors/ApiError";
import AuthService from "../services/AuthService";

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { email, password } = req.body;
      const accessToken = await AuthService.login(email, password);
      return res.json({ access_token: accessToken });
    } catch (e) {
      console.log("🔴 AuthController::login error:", e);
      next(e);
    }
  }

  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { email, password, name } = req.body;
      const avatar = (req.files as any)?.avatar;
      const accessToken = await AuthService.registration(
        email,
        password,
        name,
        avatar
      );
      return res.status(201).json({ access_token: accessToken });
    } catch (e) {
      console.log("🔴 AuthController::registration error:", e);
      next(e);
    }
  }
}

export default new AuthController();
