import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";
import { AppError } from "../../utils/AppError";

const makeDeleteProduct =
  (mainRepo: IProductRepository) => async (id: string) => {
    const exist = await mainRepo.findById(id);
    if (!exist) throw AppError.notFound("Product not found");

    return await mainRepo.remove(id);
  };

export default makeDeleteProduct;
