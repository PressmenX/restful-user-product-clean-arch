import IUserRepository from "../../repository/interfaces/IUserRepository";
import { AppError } from "../../utils/AppError";

const makeGetProfile = (repo: IUserRepository) => async (id: string) => {
  const user = await repo.findById(id);
  if (!user) throw AppError.notFound("User not found");

  return user;
};

export default makeGetProfile;
