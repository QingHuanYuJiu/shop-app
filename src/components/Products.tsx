'use client'

import { useSortStore } from '@/store'
import { Product } from '@/types/global'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Products({ data }: { data: Product[] }) {
    const { value } = useSortStore()
    const router = useRouter()
    const products = [...data]
    if (value !== 'latest') {
        products.sort((a, b) => (value === 'Low' ? a.price - b.price : b.price - a.price))
    }
    const handleClick = (id: number) => {
        router.push(`/detail/${id}`)
    }

    return (
        <div className="flex-1">
            <h2 className="mb-8 text-4xl">All Products</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer"
                        onClick={() => handleClick(product.id)}>
                        <Image src={product.image} alt={product.name} width={300} height={300} priority />
                        <div className="flex items-center justify-between mt-4">
                            <h3 className="flex-2xl text-slate-700">{product.name}</h3>
                            <p className="text-lg font-bold text-red-400">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
