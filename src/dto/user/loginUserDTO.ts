import { LoginInput, LoginResponse } from "../../types/user/LoginUser";

const loginReqDTO = (body: LoginInput) => ({
  email: body.email,
  password: body.password,
});

const loginResDTO = (user: LoginResponse) => ({
  id: user.id,
  name: user.email,
  email: user.email,
  token: user.token,
});

export { loginReqDTO, loginResDTO };
