import { RequestHandler } from "express";
import { ProductUseCases } from "../use-cases/product";
import { productResDTO } from "../dto/product/productDTO";

type ProductController = {
  getAllProduct: RequestHandler;
  getProductById: RequestHandler;
  createProduct: RequestHandler;
  updateProduct: RequestHandler;
  deleteProduct: RequestHandler;
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
  getProductById: async (req, res) => {
    const id = req.params.id;
    const product = await useCases.getProductById(id);
    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data: productResDTO(product),
    });
  },
  createProduct: async (req, res) => {
    const product = await useCases.createProduct(req.body);
    res.status(201).json({
      status: "success",
      message: "Data created successfully",
      new: productResDTO(product),
    });
  },
  updateProduct: async (req, res) => {
    const id = req.params.id;
    const product = await useCases.updateProduct(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Data updated successfully",
      updated: productResDTO(product),
    });
  },
  deleteProduct: async (req, res) => {
    const id = req.params.id;
    const deletedStatus = await useCases.deleteProduct(id);
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully",
      deleted: deletedStatus,
      deletedId: id,
    });
  },
});

export default makeProductController;
