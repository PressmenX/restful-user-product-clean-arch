import { Router } from "express";
import makeProductController from "../controllers/product.controller";
import { makeProductUseCases } from "../use-cases/product";
import makeProductRepository from "../repository/in-memory/InMemoryProductRepository";
import makeCategoryRepository from "../repository/in-memory/InMemoryCategoryRepository";
import asyncError from "../utils/asyncError";
import validate from "../middlewares/validate";
import { createProductSchema } from "../schemas/product/createProductSchema";
import authCheck from "../middlewares/authCheck";

const productRouter = Router();
const mainRepo = makeProductRepository();
const subRepo = makeCategoryRepository();
const useCases = makeProductUseCases(mainRepo, subRepo);
const controller = makeProductController(useCases);

productRouter.get("/", asyncError(controller.getAllProduct));
productRouter.get("/:id", asyncError(controller.getProductById));

productRouter.post(
  "/",
  authCheck,
  validate(createProductSchema),
  asyncError(controller.createProduct),
);

// TODO : MEMBUAT UPDATE FEATURES

export default productRouter;
