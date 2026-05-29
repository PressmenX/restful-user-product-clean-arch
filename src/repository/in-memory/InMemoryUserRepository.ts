import { randomUUID } from "node:crypto";
import User from "../../entities/User";
import IUserRepository from "../interfaces/IUserRepository";
import { users as seedUsers } from "../mock-db";

const makeUserRepository = (): IUserRepository => {
  const users: User[] = [...seedUsers];

  return {
    async findAll() {
      return users ;
    },
    async findById(id: string) {
      const user = users.find((u) => u.id === id);
      if (!user) return null;
      return user;
    },
    async findByEmail(email: string) {
      const user = users.find((u) => u.email === email);
      if (!user) return null;
      return user;
    },
    async save(userData: Omit<User, 'id'>) {
      const user = { id: randomUUID(), ...userData };
      users.push(user);
      return user;
    },
  };
};

export default makeUserRepository