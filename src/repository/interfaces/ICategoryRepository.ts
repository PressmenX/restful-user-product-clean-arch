import Category from "../../entities/Category";

export default interface ICategoryRepository {
  findAll: () => Promise<Category[] | []>;
  findById: (id: string) => Promise<Category | null>;
}
