import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async getCurrentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization!.split(" ")[1];
      const user = await UserService.getCurrentUser(token);
      return res.json({ user });
    } catch (e) {
      console.log("🔴 UserController::getCurrentUser error:", e);
      next(e);
    }
  }
}

export default new UserController();
