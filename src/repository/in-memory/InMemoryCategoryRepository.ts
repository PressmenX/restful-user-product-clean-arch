import Category from "../../entities/Category";
import ICategoryRepository from "../interfaces/ICategoryRepository";
import { categories as seedCategories } from "../mock-db";

const makeCategoryRepository = (): ICategoryRepository => {
  const categories: Category[] = [...seedCategories];

  return {
    async findAll() {
      return categories;
    },
    async findById(id: string) {
      const category = categories.find((c) => c.id === id);
      if (!category) return null;
      return category;
    },
  };
};

export default makeCategoryRepository
