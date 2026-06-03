import IUserRepository from "../../repository/interfaces/IUserRepository";
import { AppError } from "../../utils/AppError";

const makeDeleteMyAccount = (repo: IUserRepository) => async (id: string) => {
  const user = await repo.findById(id);
  if (!user) throw AppError.notFound("User not found");

  return await repo.delete(id);
};

export default makeDeleteMyAccount;
