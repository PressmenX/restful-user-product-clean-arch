import { updateInput } from "../../schemas/user/updateInput";
import User from "../../entities/User";

const updateReqDTO = (body: updateInput) => {
  let request: Partial<updateInput> = {};

  if (body.name) request.name = body.name;
  if (body.email) request.email = body.email;
  if (body.password) request.password = body.password;

  return request;
};

const updateResDTO = (user: User) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export { updateResDTO, updateReqDTO };
