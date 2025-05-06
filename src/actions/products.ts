'use server'
import { db } from '@/lib/db'
import { Product, GetAllProductsAction, GetProductsAction } from '@/types/global'
export async function getAllProducts(): Promise<GetAllProductsAction> {
    const products = (await db`SELECT * FROM products`) as Product[]
    return {
        status: 200,
        body: 'get products',
        data: products
    }
}

export async function getProduct(id: number): Promise<GetProductsAction> {
    const products = (await db`SELECT * FROM products WHERE id = ${id}`) as Product[]
    console.log(products);

    return {
        status: 200,
        body: 'get products',
        data: products[0]
    }
}
