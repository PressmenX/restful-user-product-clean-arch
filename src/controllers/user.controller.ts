import { RequestHandler } from "express";
import { inputDTO, outputDTO } from "../dto/userDTO";
import { IUserUseCase } from "../use-cases/user";

interface UserController {
  register: RequestHandler;
}

const makeUserController = (useCase: IUserUseCase): UserController => ({
  register: async (req, res) => {
    const newUser = await useCase.register(inputDTO(req.body));
    res
      .status(201)
      .json({
        status: "succes",
        message: "User successfully created",
        new: outputDTO(newUser),
      });
  },
});


export default makeUserController