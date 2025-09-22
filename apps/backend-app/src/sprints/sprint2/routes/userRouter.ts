import { Router } from "express";
import authMiddleware from "../../../middlewares/authMiddleware";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/me", authMiddleware, UserController.getCurrentUser);
router.delete("/me/avatar", authMiddleware, UserController.deleteAvatar);

export default router;
