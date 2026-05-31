import User from "../entities/User";
import { RegisterUser } from "../schemas/registerInput";


const inputDTO = (body: RegisterUser) => ({
  name: body.name,
  email: body.email,
  password: body.password,
});

const outputDTO = (user: User) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export { inputDTO, outputDTO };
