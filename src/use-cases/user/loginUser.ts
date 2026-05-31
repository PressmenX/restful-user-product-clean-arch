import env from "../../config/env";
import IUserRepository from "../../repository/interfaces/IUserRepository";
import { LoginUser } from "../../schemas/loginInput";
import { AppError } from "../../utils/AppError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const makeLoginUser =
  (repo: IUserRepository) => async (inputDTO: LoginUser) => {
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

    return token;
  };

export default makeLoginUser;
