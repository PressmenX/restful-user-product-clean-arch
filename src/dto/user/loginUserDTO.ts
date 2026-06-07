import { LoginInput, LoginResponse } from "../../types/user/LoginUser";

const loginReqDTO = (body: LoginInput) => ({
  email: body.email,
  password: body.password,
});

const loginResDTO = (user: LoginResponse) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  token: user.token,
});

export { loginReqDTO, loginResDTO };
