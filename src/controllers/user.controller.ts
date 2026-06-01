import { RequestHandler } from "express";
import { registerReqDTO, registerResDTO } from "../dto/registerUserDTO";
import { IUserUseCase } from "../use-cases/user";
import { loginReqDTO, loginResDTO } from "../dto/loginUserDTO";
import { updateReqDTO, updateResDTO } from "../dto/updateUserDTO";

interface UserController {
  register: RequestHandler;
  login: RequestHandler;
  getAll: RequestHandler;
  getProfile: RequestHandler;
  update: RequestHandler;
  delete: RequestHandler;
}

const makeUserController = (useCase: IUserUseCase): UserController => ({
  register: async (req, res) => {
    const newUser = await useCase.register(registerReqDTO(req.body));
    res.status(201).json({
      status: "success",
      message: "User successfully created",
      new: registerResDTO(newUser),
    });
  },
  login: async (req, res) => {
    const result = await useCase.login(loginReqDTO(req.body));
    res.status(200).json({
      status: "success",
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
      status: "success",
      message: "Data retrieved successfully",
      info: {
        id: user?.id,
        issuedAt,
        expiredAt,
      },
      data: users,
    });
  },
  getProfile: async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    const profile = await useCase.getProfile(id);
    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      requestedBy: user?.id,
      data: profile,
    });
  },
  update: async (req, res) => {
    const id = req.params.id;
    const result = await useCase.update(id, updateReqDTO(req.body));
    res.status(200).json({
      status: "success",
      message: "Data updated successfully",
      updated: updateResDTO(result),
    });
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const deletedStatus = await useCase.delete(id);
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully",
      deleted: deletedStatus,
      deletedId: id,
    });
  },
});

export default makeUserController;
