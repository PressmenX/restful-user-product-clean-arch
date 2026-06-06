import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";
import { ProductInput } from "../../schemas/product/createProductSchema";
import { AppError } from "../../utils/AppError";

const makeCreateProduct =
  (mainRepo: IProductRepository, subRepo: ICategoryRepository) =>
  async (input: ProductInput) => {
    const category = await subRepo.findById(input.categoryId);
    if (!category) throw AppError.validationError("Category not listed");

    const product = await mainRepo.save(input)
    const result = {...product, category}
    return result;
  };

export default makeCreateProduct
