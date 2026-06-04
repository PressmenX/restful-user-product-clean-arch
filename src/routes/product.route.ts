import { Router } from "express";
import makeProductController from "../controllers/product.controller";
import { makeProductUseCases } from "../use-cases/product";
import makeProductRepository from "../repository/in-memory/InMemoryProductRepository";
import makeCategoryRepository from "../repository/in-memory/InMemoryCategoryRepository";

const productRouter = Router();

const mainRepo = makeProductRepository();
const subRepo = makeCategoryRepository();
const useCases = makeProductUseCases(mainRepo, subRepo);
const controller = makeProductController(useCases);

productRouter.get("/", controller.getAllProduct);

export default productRouter;
