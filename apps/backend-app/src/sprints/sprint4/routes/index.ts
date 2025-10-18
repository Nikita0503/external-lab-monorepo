import { Router } from "express";
import authRouter from "./authRouter";
import taskRouter from "./taskRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/tasks", taskRouter);

export default router;
