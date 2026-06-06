import Product from "../../entities/Product";

export default interface IProductRepository {
  findAll: () => Promise<Product[] | []>;
  findById: (id: string) => Promise<Product | null>;
  save: (productData: Omit<Product, "id">) => Promise<Product>;
  remove: (id: string) => Promise<boolean>;
  update : (id: string, changes: Partial<Omit<Product, "id">>) => Promise<Product | null>
}
