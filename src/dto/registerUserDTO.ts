import User from "../entities/User";
import { RegisterUser } from "../schemas/registerInput";

const registerReqDTO = (body: RegisterUser) => ({
  name: body.name,
  email: body.email,
  password: body.password,
});


const registerResDTO = (user: User) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export { registerReqDTO, registerResDTO };
