import IUserRepository from "../../repository/interfaces/IUserRepository";
import { RegisterUser } from "../../schemas/registerInput";
import { AppError } from "../../utils/AppError";
import bcrypt from "bcrypt";

const makeRegisterUser =
  (repo: IUserRepository) => async (inputDTO: RegisterUser) => {
    const registered = await repo.findByEmail(inputDTO.email);

    if (registered) {
      throw AppError.conflict("Email is already in use");
    }

    const hashPassword = await bcrypt.hash(inputDTO.password, 10);
    const newUser = { ...inputDTO, password: hashPassword };
    return await repo.save(newUser);
  };

export default makeRegisterUser;
