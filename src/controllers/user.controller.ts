import { RequestHandler } from "express";
import { inputDTO, outputDTO } from "../dto/registerUserDTO";
import { IUserUseCase } from "../use-cases/user";
import { inLoginDTO, outLoginDTO } from "../dto/loginUserDTO";

interface UserController {
  register: RequestHandler;
  login: RequestHandler;
}

const makeUserController = (useCase: IUserUseCase): UserController => ({
  register: async (req, res) => {
    const newUser = await useCase.register(inputDTO(req.body));
    res.status(201).json({
      status: "succes",
      message: "User successfully created",
      new: outputDTO(newUser),
    });
  },
  login: async (req, res) => {
    const token = await useCase.login(inLoginDTO(req.body));
    res.status(200).json({
      token: outLoginDTO(token),
    });
  },
});

export default makeUserController;
