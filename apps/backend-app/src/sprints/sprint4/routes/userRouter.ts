import { Router } from "express";
import authMiddleware from "../../../middlewares/authMiddleware";
import { editUserValidators } from "../../../middlewares/validators/userRouterValidator";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/me", authMiddleware, UserController.getCurrentUser);
router.put(
  "/me",
  authMiddleware,
  ...editUserValidators(),
  UserController.editUser
);
router.delete("/me/avatar", authMiddleware, UserController.deleteAvatar);

export default router;
