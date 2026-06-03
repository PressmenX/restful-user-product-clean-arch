import IUserRepository from "../../repository/interfaces/IUserRepository";
import makeDeleteMyAccount from "./deleteMyAccount";
import makeGetProfile from "./getProfile";
import makeLoginUser from "./loginUser";
import makeRegisterUser from "./registerUser";
import makeUpdateMyProfile from "./updateMyProfile";

export const makeUserUseCase = (repo: IUserRepository) => ({
  register: makeRegisterUser(repo),
  login: makeLoginUser(repo),
  getAll: async () => await repo.findAll(),
  getProfile: makeGetProfile(repo),
  updateMyProfile: makeUpdateMyProfile(repo),
  deleteMyAccount: makeDeleteMyAccount(repo),
});

export type IUserUseCase = ReturnType<typeof makeUserUseCase>;
