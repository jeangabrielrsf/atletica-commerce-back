import { notFoundError } from "@/errors/notFoundError";
import productsRepository from "@/repositories/productsRepository";

async function getProducts() {
	const products = await productsRepository.findProducts();
	if (!products) {
		throw notFoundError();
	}
	return products;
}

async function getProductsCategories() {
	const categories = await productsRepository.findProductsCategories();
	if (!categories) {
		throw notFoundError();
	}
	return categories;
}

const productsService = {
	getProducts,
	getProductsCategories,
};

export default productsService;
