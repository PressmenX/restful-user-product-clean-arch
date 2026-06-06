import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";
import makeCreateProduct from "./createProduct";
import makeGetAllProduct from "./getAllProduct";
import makeGetProductById from "./getProductById";

const makeProductUseCases = (
  mainRepo: IProductRepository,
  subRepo: ICategoryRepository,
) => ({
  getAllProduct: makeGetAllProduct(mainRepo, subRepo),
  getProductById : makeGetProductById(mainRepo, subRepo),
  createProduct : makeCreateProduct(mainRepo, subRepo),
});

type ProductUseCases = ReturnType<typeof makeProductUseCases>

export {makeProductUseCases, ProductUseCases}
