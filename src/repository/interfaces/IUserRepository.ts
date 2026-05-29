import User from "../../entities/User";

export default interface IUserRepository {
  findAll: () => Promise<User[] | []>;
  findByEmail: (email: string) => Promise<User | null>;
  findById: (id: string) => Promise<User | null>;
  save: (userData: Omit<User, "id">) => Promise<User>;
}
