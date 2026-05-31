import z from "zod";
import { loginUserSchema } from "../../schemas/loginInput";

type LoginInput = z.infer<typeof loginUserSchema>;
interface LoginResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

export { LoginResponse, LoginInput };
