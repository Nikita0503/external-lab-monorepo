import { Router } from "express";
import authMiddleware from "../../../middlewares/authMiddleware";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/me", authMiddleware, UserController.getCurrentUser);

export default router;
