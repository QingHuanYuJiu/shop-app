'use server'
import { db } from '@/lib/db'
import { Product, GetProductsAction } from '@/types/global'
export async function getAllProducts(): Promise<GetProductsAction> {
    const products = (await db`SELECT * FROM products`) as Product[]
    return {
        status: 200,
        body: 'get products',
        data: products
    }
}
