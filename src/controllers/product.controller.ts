import { RequestHandler } from "express";
import { ProductUseCases } from "../use-cases/product";

type ProductController = {
  getAllProduct: RequestHandler;
};

const makeProductController = (
  useCases: ProductUseCases,
): ProductController => ({
  getAllProduct: async (_req, res) => {
    const products = await useCases.getAllProduct();
    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data: products,
    });
  },
});

export default makeProductController
