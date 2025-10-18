import { Router } from "express";
import authMiddleware from "../../../middlewares/authMiddleware";
import {
  createTaskValidatorsWithPriority,
  deleteTaskAttachmentValidators,
  deleteTaskValidators,
  editTaskValidatorsWithPriority,
  getAllTasksValidators,
  getTaskValidators,
  patchTaskValidatorsWithPriority,
} from "../../../middlewares/validators/taskRouterValidators";
import TaskController from "../controllers/TaskController";

const router = Router();

router.get("/priorities", authMiddleware, TaskController.getPriorities);
router.get(
  "/all",
  authMiddleware,
  ...getAllTasksValidators(),
  TaskController.getCommonTasks
);
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
  ...createTaskValidatorsWithPriority(),
  TaskController.createTask
);
router.put(
  "/:taskId",
  authMiddleware,
  ...editTaskValidatorsWithPriority(),
  TaskController.editTask
);
router.patch(
  "/:taskId",
  authMiddleware,
  ...patchTaskValidatorsWithPriority(),
  TaskController.patchTask
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
