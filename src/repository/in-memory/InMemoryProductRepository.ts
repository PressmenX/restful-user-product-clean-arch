import { randomUUID } from "node:crypto";
import Product from "../../entities/Product";
import IProductRepository from "../interfaces/IProductRepository";
import { products as seedProducts } from "../mock-db";

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
      const newProduct: Product = { id: randomUUID(), ...productData };
      products.push(newProduct);
      return newProduct;
    },
    async remove(id: string) {
      const index = products.findIndex((p) => p.id === id);
      if (index === -1) return false;
      return true;
    },
  };
};


export default makeProductRepository