import { Router } from "express";
import validate from "../middlewares/validate";
import { registerUserSchema } from "../schemas/registerInput";
import makeUserRepository from "../repository/in-memory/InMemoryUserRepository";
import makeUserController from "../controllers/user.controller";
import asyncError from "../utils/asyncError";
import { makeUserUseCase } from "../use-cases/user";

const userRouter = Router();
const repo = makeUserRepository();
const useCase = makeUserUseCase(repo);
const controller = makeUserController(useCase);

userRouter.post(
  "/register",
  validate(registerUserSchema),
  asyncError(controller.register),
);

export default userRouter;
