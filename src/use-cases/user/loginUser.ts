import env from "../../config/env";
import IUserRepository from "../../repository/interfaces/IUserRepository";
import { LoginInput } from "../../types/user/LoginUser";
import { AppError } from "../../utils/AppError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const makeLoginUser =
  (repo: IUserRepository) => async (inputDTO: LoginInput) => {
    const user = await repo.findByEmail(inputDTO.email);

    if (!user) {
      throw AppError.validationError("Invalid email or password");
    }

    const isValidPassword = await bcrypt.compare(
      inputDTO.password,
      user.password,
    );
    if (!isValidPassword) {
      throw AppError.validationError("Invalid email or password");
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  };

export default makeLoginUser;
