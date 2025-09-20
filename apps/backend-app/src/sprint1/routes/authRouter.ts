import { Router } from "express";
import {
  loginValidators,
  registrationValidators,
} from "../../middlewares/validators/userRouterValidators";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/login", ...loginValidators(), UserController.login);

router.post(
  "/registration",
  ...registrationValidators(),
  UserController.registration
);

export default router;
