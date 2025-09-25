import { Router } from "express";
import authMiddleware from "../../../middlewares/authMiddleware";
import {
  createTaskValidators,
  deleteTaskValidators,
} from "../../../middlewares/validators/taskRouterValidators";
import TaskController from "../controllers/TaskController";

const router = Router();

router.get("/", authMiddleware, TaskController.getTasks);
router.post(
  "/",
  authMiddleware,
  ...createTaskValidators(),
  TaskController.createTask
);
router.delete(
  "/:taskId",
  authMiddleware,
  ...deleteTaskValidators(),
  TaskController.deleteTask
);

export default router;
