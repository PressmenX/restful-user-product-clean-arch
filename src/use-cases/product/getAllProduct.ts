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
        let productRes: ProductWithCategory;
        const category = await categoryRepo.findById(p.categoryId);

        productRes = { ...p, category };
        return productResDTO(productRes);
      }),
    );

    return responseProducts;
  };

export default makeGetAllProduct;
