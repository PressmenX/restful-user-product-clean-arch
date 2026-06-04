import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";
import { AppError } from "../../utils/AppError";

const makeGetProductById = (mainRepo: IProductRepository, subRepo: ICategoryRepository) => async (id: string) => {
  const product = await mainRepo.findById(id)
  if(!product) throw AppError.notFound("Product not found");

  const category = await subRepo.findById(product.categoryId)
  const result = {...product, category}

  return result
}

export default makeGetProductById