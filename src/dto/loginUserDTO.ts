import { LoginUser } from "../schemas/loginInput";

const inLoginDTO = (body: LoginUser) => ({
  email: body.email,
  password: body.password,
});

const outLoginDTO = (token: string) => token;

export { inLoginDTO, outLoginDTO };
