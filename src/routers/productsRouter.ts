import { getCategories, getProducts } from "@/controllers/productsController";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.get("/categories", getCategories);

export { productsRouter };
