'use server'

import { PrismaClient } from '@prisma/client'
import logger from '@/lib/logger'


const prisma = new PrismaClient()

export async function createProduct(jsonProductAsString: string = "") {

	console.log(jsonProductAsString)

	const jsonProduct = await JSON.parse(jsonProductAsString)
	// product validation if applicable
	const createdProduct = await prisma.product.create({
		data: jsonProduct
	})

	logger.info("createdProduct = " + createdProduct)

	return createdProduct
}

export async function readProduct(jsonWantedProductAsString: string) {
	const jsonWantedProduct = JSON.parse(jsonWantedProductAsString)
	// jsonWantedProduct validation if applicable
	const foundProduct = await prisma.product.findUnique({
		where: jsonWantedProduct
	})

	logger.info('foundProduct = ' + foundProduct)

	return foundProduct
}

export async function updateProduct(
	jsonProductAsString: string,
	jsonNewProductAsString: string
) {
	const jsonProduct = JSON.parse(jsonProductAsString)
	const jsonNewProduct = JSON.parse(jsonNewProductAsString)
	// jsonProduct and jsonNewProduct validation if applicable
	const updatedProduct = await prisma.product.update({
		where: jsonProduct,
		data: jsonNewProduct,
	})

	logger.info("updatedProduct = " + updatedProduct)

	return updatedProduct
}

export async function deleteProduct(jsonProductAsString: string) {
	const jsonProduct = JSON.parse(jsonProductAsString)
	// jsonProduct validation if applicable
	const deletedProduct = await prisma.product.delete({
		where: jsonProduct
	})

	logger.info('deletedProduct = ' + deletedProduct)

	return deletedProduct
}

export async function listProductsWithPagination(
	jsonProductsFilterAsString: string,
	pageNumber: number,
	pageSize: number
) {
	const jsonProductsFilter = JSON.parse(jsonProductsFilterAsString)
	// jsonProductsFilter validation if applicable
	const listedProducts = await prisma.product.findMany({
		where: jsonProductsFilter,
		skip: (pageNumber-1)*pageSize,
		take: pageSize
	})

	logger.info("listedProducts = " + listedProducts)

	return listedProducts
}

