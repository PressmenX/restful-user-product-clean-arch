import { Router } from "express";
import validate from "../middlewares/validate";
import { registerUserSchema } from "../schemas/registerInput";
import makeUserRepository from "../repository/in-memory/InMemoryUserRepository";
import makeUserController from "../controllers/user.controller";
import asyncError from "../utils/asyncError";
import { makeUserUseCase } from "../use-cases/user";
import { loginUserSchema } from "../schemas/loginInput";
import authCheck from "../middlewares/authCheck";

const userRouter = Router();
const repo = makeUserRepository();
const useCase = makeUserUseCase(repo);
const controller = makeUserController(useCase);

userRouter.post(
  "/register",
  validate(registerUserSchema),
  asyncError(controller.register),
);

userRouter.post(
  "/login",
  validate(loginUserSchema),
  asyncError(controller.login),
);

userRouter.get("/", authCheck, asyncError(controller.getAll));

userRouter.get("/:id", authCheck, asyncError(controller.getProfile));


// TODO : PASANG SCHEMA DI PUT!
userRouter.put("/:id", authCheck, asyncError(controller.update));

userRouter.delete("/:id", authCheck, asyncError(controller.delete));

export default userRouter;
