import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import ApiError from "../../../errors/ApiError";
import UserService from "../services/UserService";

class UserController {
  async getCurrentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization!.split(" ")[1];
      const user = await UserService.getCurrentUser(token);
      return res.json(user);
    } catch (e) {
      console.log("🔴 UserController::getCurrentUser error:", e);
      next(e);
    }
  }

  async editUser(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const token = req.headers.authorization!.split(" ")[1];
      const { name } = req.body;
      const avatar = (req.files as any)?.avatar;
      const updatedUser = await UserService.editUser(token, name, avatar);
      return res.json(updatedUser);
    } catch (e) {
      console.log("🔴 UserController::editUser error:", e);
      next(e);
    }
  }

  async deleteAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization!.split(" ")[1];
      const isDone = await UserService.deleteAvatar(token);
      return res.json({ deleted: isDone });
    } catch (e) {
      console.log("🔴 UserController::deleteAvatar error:", e);
      next(e);
    }
  }
}

export default new UserController();
