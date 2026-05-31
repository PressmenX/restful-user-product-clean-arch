import IUserRepository from "../../repository/interfaces/IUserRepository";
import makeLoginUser from "./loginUser";
import makeRegisterUser from "./registerUser";

export const makeUserUseCase = (repo: IUserRepository) => ({
  register: makeRegisterUser(repo),
  login : makeLoginUser(repo)
});

export type IUserUseCase = ReturnType<typeof makeUserUseCase>;
