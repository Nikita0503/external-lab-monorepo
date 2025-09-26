import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import ApiError from "../../../errors/ApiError";
import TaskService from "../services/TaskService";

class TaskController {
  async getTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const token = req.headers.authorization!.split(" ")[1];
      const tasks = await TaskService.getTasks(token);
      return res.json(tasks);
    } catch (e) {
      console.log("🔴 TaskController::getTasks error:", e);
      next(e);
    }
  }

  async getFullTask(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { taskId } = req.params;
      const task = await TaskService.getFullTask(taskId);
      return res.json(task);
    } catch (e) {
      next(e);
    }
  }

  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { title, description } = req.body;
      const files = (req.files as any)?.files;
      const token = req.headers.authorization!.split(" ")[1];
      const task = await TaskService.createTask(
        title,
        description,
        files,
        token
      );
      return res.status(201).json(task);
    } catch (e) {
      console.log("🔴 TaskController::createTask error:", e);
      next(e);
    }
  }

  async editTask(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { taskId } = req.params;
      const { title, description, done } = req.body;
      const token = req.headers.authorization!.split(" ")[1];
      const files = (req.files as any)?.files;
      const task = await TaskService.editTask(
        taskId,
        title,
        description,
        done,
        files,
        token
      );
      return res.json(task);
    } catch (e) {
      console.log("🔴 TaskController::editTask error:", e);
      next(e);
    }
  }

  async patchTask(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { taskId } = req.params;
      const { title, description, done } = req.body;
      const token = req.headers.authorization!.split(" ")[1];
      const files = (req.files as any)?.files;
      const task = await TaskService.patchTask(
        taskId,
        title,
        description,
        done,
        files,
        token
      );
      return res.json(task);
    } catch (e) {
      console.log("🔴 TaskController::patchTask error:", e);
      next(e);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { taskId } = req.params;
      const token = req.headers.authorization!.split(" ")[1];
      const isDone = await TaskService.deleteTask(taskId, token);
      return res.json({ deleted: isDone });
    } catch (e) {
      console.log("🔴 TaskController::deleteTask error:", e);
      next(e);
    }
  }

  async deleteTaskAttachment(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest("Invalid data", errors));
      }
      const { taskId, fileId } = req.params;
      const token = req.headers.authorization!.split(" ")[1];
      const isDone = await TaskService.deleteTaskAttachment(
        taskId,
        fileId,
        token
      );
      return res.json({ deleted: isDone });
    } catch (e) {
      console.log("🔴 TaskController::deleteTaskAttachment error:", e);
      next(e);
    }
  }
}

export default new TaskController();
