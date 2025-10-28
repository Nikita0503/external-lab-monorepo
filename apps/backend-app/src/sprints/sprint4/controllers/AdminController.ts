import { NextFunction, Request, Response } from "express";
import AdminService from "../services/AdminService";

class AdminController {
  async getAllUsersAndTheirTasks(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = await AdminService.getAllUsersAndTheirTasks();
      return res.json(users);
    } catch (e) {
      console.log("🔴 AdminController::getAllUsersAndTheirTasks error:", e);
      next(e);
    }
  }

  async deleteAllUsersAndTheirTasks(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const isDone = await AdminService.deleteAllUsersAndTheirTasks();
      return res.json({ deleted: isDone });
    } catch (e) {
      console.log("🔴 AdminController::deleteAllUsersAndTheirTasks error:", e);
      next(e);
    }
  }
}

export default new AdminController();
