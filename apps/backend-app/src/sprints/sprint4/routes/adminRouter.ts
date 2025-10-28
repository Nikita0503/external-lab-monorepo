import { Router } from "express";
import adminRoleCheckMiddleware from "../../../middlewares/adminRoleCheckMiddleware";
import authMiddleware from "../../../middlewares/authMiddleware";
import AdminController from "../controllers/AdminController";

const router = Router();

router.get(
  "/",
  authMiddleware,
  adminRoleCheckMiddleware,
  AdminController.getAllUsersAndTheirTasks
);
router.delete(
  "/",
  authMiddleware,
  adminRoleCheckMiddleware,
  AdminController.deleteAllUsersAndTheirTasks
);

export default router;
