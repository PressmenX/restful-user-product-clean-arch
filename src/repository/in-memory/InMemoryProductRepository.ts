import Product from "../../entities/Product";
import IProductRepository from "../interfaces/IProductRepository";
import { products as seedProducts } from "../mock-db";
import generateProductId from "../../utils/generateProductId";

const makeProductRepository = (): IProductRepository => {
  const products: Product[] = [...seedProducts];

  return {
    async findAll() {
      return products;
    },
    async findById(id: string) {
      const product = products.find((p) => p.id === id);
      if (!product) return null;
      return product;
    },
    async save(productData: Omit<Product, "id">) {
      const newProduct: Product = { id: generateProductId(), ...productData };
      products.push(newProduct);
      return newProduct;
    },
    async remove(id: string) {
      const index = products.findIndex((p) => p.id === id);
      if (index === -1) return false;
      products.splice(index, 1);
      return true;
    },
    async update(id, changes) {
      const index = products.findIndex((p) => p.id === id);
      if (index === -1) return null;

      const existising = products[index];
      products[index] = { ...existising, ...changes, id };
      return products[index];
    },
  };
};

export default makeProductRepository;
