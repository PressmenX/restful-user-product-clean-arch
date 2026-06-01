import IUserRepository from "../../repository/interfaces/IUserRepository";
import { updateInput } from "../../schemas/updateInput";
import { AppError } from "../../utils/AppError";
import bcrypt from "bcrypt";

const makeUpdateUser =
  (repo: IUserRepository) =>
  async (id: string, changes: updateInput) => {
    const user = await repo.findById(id);
    if (!user) throw AppError.notFound("User not found");

    if (changes.email && changes.email !== user.email) {
      const exist = await repo.findByEmail(changes.email);
      if (exist) throw AppError.conflict("Email already in use");
    }

    if (changes.password) {
      const hashPassword = await bcrypt.hash(changes.password, 10);
      changes.password = hashPassword;
    }

    const updatedUser = await repo.update(id, changes);
    if (!updatedUser) throw AppError.notFound("User not found after update");

    return updatedUser;
  };

export default makeUpdateUser;
