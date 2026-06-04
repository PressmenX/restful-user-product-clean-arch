import {
  ProductRes,
  productResDTO,
  ProductWithCategory,
} from "../../dto/product/productDTO";
import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";

const makeGetAllProduct =
  (productRepo: IProductRepository, categoryRepo: ICategoryRepository) =>
  async () => {
    const products = await productRepo.findAll();
    const responseProducts: ProductRes[] = await Promise.all(
      products.map(async (p) => {
        const category = await categoryRepo.findById(p.categoryId);
        const product = { ...p, category };
        return productResDTO(product);
      }),
    );

    return responseProducts;
  };

export default makeGetAllProduct;
