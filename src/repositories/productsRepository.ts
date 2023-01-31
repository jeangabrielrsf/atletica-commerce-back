import { prisma } from "@/config";

async function findProducts() {
	return prisma.products.findMany();
}

async function findProductsCategories() {
	return prisma.productsCategories.findMany();
}

const productsRepository = {
	findProducts,
	findProductsCategories,
};

export default productsRepository;
