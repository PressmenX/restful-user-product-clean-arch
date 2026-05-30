import IUserRepository from "../../repository/interfaces/IUserRepository";
import makeRegisterUser from "./registerUser";

export const makeUserUseCase = (repo: IUserRepository) => ({
  register: makeRegisterUser(repo),
});

export type IUserUseCase = ReturnType<typeof makeUserUseCase>;
