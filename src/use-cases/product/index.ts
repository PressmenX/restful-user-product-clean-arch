import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IProductRepository from "../../repository/interfaces/IProductRepository";
import makeGetAllProduct from "./getAllProduct";

const makeProductUseCases = (
  mainRepo: IProductRepository,
  subRepo: ICategoryRepository,
) => ({
  getAllProduct: makeGetAllProduct(mainRepo, subRepo),
});

type ProductUseCases = ReturnType<typeof makeProductUseCases>

export {makeProductUseCases, ProductUseCases}
