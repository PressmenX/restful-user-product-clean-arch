import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";
import makeCreateProduct from "./createProduct";
import makeDeleteProduct from "./deleteProduct";
import makeGetAllProduct from "./getAllProduct";
import makeGetProductById from "./getProductById";
import makeUpdateProduct from "./updateProduct";

const makeProductUseCases = (
  mainRepo: IProductRepository,
  subRepo: ICategoryRepository,
) => ({
  getAllProduct: makeGetAllProduct(mainRepo, subRepo),
  getProductById: makeGetProductById(mainRepo, subRepo),
  createProduct: makeCreateProduct(mainRepo, subRepo),
  updateProduct: makeUpdateProduct(mainRepo, subRepo),
  deleteProduct: makeDeleteProduct(mainRepo),
});

type ProductUseCases = ReturnType<typeof makeProductUseCases>;

export { makeProductUseCases, ProductUseCases };
