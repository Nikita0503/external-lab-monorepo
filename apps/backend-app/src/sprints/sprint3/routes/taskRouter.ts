import { Router } from "express";
import authMiddleware from "../../../middlewares/authMiddleware";
import {
  createTaskValidators,
  deleteTaskAttachmentValidators,
  deleteTaskValidators,
  getTaskValidators,
} from "../../../middlewares/validators/taskRouterValidators";
import TaskController from "../controllers/TaskController";

const router = Router();

router.get("/", authMiddleware, TaskController.getTasks);
router.get(
  "/:taskId",
  authMiddleware,
  ...getTaskValidators(),
  TaskController.getFullTask
);
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
router.delete(
  "/:taskId/attachments/:fileId",
  authMiddleware,
  ...deleteTaskAttachmentValidators(),
  TaskController.deleteTaskAttachment
);

export default router;
