import { Router } from "express";
import validate from "../middlewares/validate";
import { registerUserSchema } from "../schemas/user/registerInput";
import makeUserRepository from "../repository/in-memory/InMemoryUserRepository";
import makeUserController from "../controllers/user.controller";
import asyncError from "../utils/asyncError";
import { makeUserUseCase } from "../use-cases/user";
import { loginUserSchema } from "../schemas/user/loginInput";
import authCheck from "../middlewares/authCheck";
import { updateInputSchema } from "../schemas/user/updateInput";

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

userRouter.put(
  "/me",
  authCheck,
  validate(updateInputSchema),
  asyncError(controller.updateMyProfile),
);

userRouter.delete("/me", authCheck, asyncError(controller.deleteMyAccount));

export default userRouter;
