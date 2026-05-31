import { RequestHandler } from "express";
import { registerReqDTO, registerResDTO } from "../dto/registerUserDTO";
import { IUserUseCase } from "../use-cases/user";
import { loginReqDTO, loginResDTO } from "../dto/loginUserDTO";

interface UserController {
  register: RequestHandler;
  login: RequestHandler;
  getAll: RequestHandler;
}

const makeUserController = (useCase: IUserUseCase): UserController => ({
  register: async (req, res) => {
    const newUser = await useCase.register(registerReqDTO(req.body));
    res.status(201).json({
      status: "succes",
      message: "User successfully created",
      new: registerResDTO(newUser),
    });
  },
  login: async (req, res) => {
    const result = await useCase.login(loginReqDTO(req.body));
    res.status(200).json({
      status: "succes",
      message: "Login successful",
      result: loginResDTO(result),
    });
  },
  getAll: async (req, res) => {
    const users = await useCase.getAll();
    const user = req.user;
    const issuedAt = new Date(Number(user?.iat) * 1000).toLocaleString();
    const expiredAt = new Date(Number(user?.exp) * 1000).toLocaleString();
    res.status(200).json({
      status: "succes",
      message: "Data retrieved successfully",
      info: {
        id: user?.id,
        issuedAt,
        expiredAt,
      },
      data: users,
    });
  },
});

export default makeUserController;
