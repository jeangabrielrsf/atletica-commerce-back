import productsService from "@/services/productsService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getProducts(req: Request, res: Response) {
	try {
		const products = await productsService.getProducts();
		return res.status(httpStatus.OK).send(products);
	} catch (error) {
		console.log(error);
		return res.sendStatus(httpStatus.NOT_FOUND);
	}
}

export async function getCategories(req: Request, res: Response) {
	try {
		const categories = await productsService.getProductsCategories();
		return res.status(httpStatus.OK).send(categories);
	} catch (error) {
		console.log(error);
		return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
	}
}
