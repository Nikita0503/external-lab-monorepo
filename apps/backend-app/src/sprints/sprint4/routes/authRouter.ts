import { Router } from "express";
import {
  loginValidators,
  registrationValidators,
} from "../../../middlewares/validators/authRouterValidators";
import UserController from "../controllers/AuthController";

const router = Router();

router.post("/login", ...loginValidators(), UserController.login);

router.post(
  "/registration",
  ...registrationValidators(),
  UserController.registration
);

export default router;
