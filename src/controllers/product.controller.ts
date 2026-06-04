import { RequestHandler } from "express";
import { ProductUseCases } from "../use-cases/product";
import { productResDTO } from "../dto/product/productDTO";

type ProductController = {
  getAllProduct: RequestHandler;
  getProductById : RequestHandler;
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
  getProductById : async (req, res) => {
    const id = req.params.id
    const product = await useCases.getProductById(id)
    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data : productResDTO(product)
    })
  }
});

export default makeProductController
