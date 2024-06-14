import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
	const myFirstProductEverCreated = await prisma.product.create({
		data: {
			name: "Cool disco pants",
			description: "Super cool pants for any party.",
			propertyKeys: ["Size", "Color", "Sex"],
			propertyValues: ["2x15x50 (cm)", "White", "Man"],
			imageURLs: [],
		}
	})

	console.log("myFirstProductEverCreated = " + myFirstProductEverCreated)

	const products = await prisma.product.findMany()
	console.log(products)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})

