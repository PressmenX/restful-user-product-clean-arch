import IUserRepository from "../../repository/interfaces/IUserRepository";
import makeDeleteUser from "./deleteUser";
import makeGetProfile from "./getProfile";
import makeLoginUser from "./loginUser";
import makeRegisterUser from "./registerUser";
import makeUpdateUser from "./updateUser";

export const makeUserUseCase = (repo: IUserRepository) => ({
  register: makeRegisterUser(repo),
  login: makeLoginUser(repo),
  getAll: async () => await repo.findAll(),
  getProfile: makeGetProfile(repo),
  update: makeUpdateUser(repo),
  delete: makeDeleteUser(repo),
});

export type IUserUseCase = ReturnType<typeof makeUserUseCase>;
