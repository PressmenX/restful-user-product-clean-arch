import { ProductWithCategory } from "../../dto/product/productDTO";
import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";
import { UpdateProductInput } from "../../schemas/product/updateProductSchema";
import { AppError } from "../../utils/AppError";

const makeUpdateProduct =
  (mainRepo: IProductRepository, subRepo: ICategoryRepository) =>
  async (id: string, input: UpdateProductInput) => {
    const product = await mainRepo.findById(id);
    if (!product) throw AppError.notFound("Product not found");

    if (input.categoryId) {
      const category = await subRepo.findById(input.categoryId);
      if (!category) throw AppError.validationError("Category not listed");
    }

    const updatedProduct = await mainRepo.update(id, input);
    if (!updatedProduct)
      throw AppError.notFound("Product not found after update");

    const category = await subRepo.findById(updatedProduct.categoryId);
    const result: ProductWithCategory = { ...updatedProduct, category, id };
    return result;
  };

export default makeUpdateProduct
