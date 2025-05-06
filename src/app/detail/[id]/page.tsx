import { getAllProducts, getProduct } from '@/actions/products'
import AddCart from '@/components/AddCart'
import Image from 'next/image'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
export async function generateStaticParams() {
    const res = await getAllProducts()
    return res.data.map((product) => ({ id: product.id.toString() }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const res = await getProduct(Number(id))
    await new Promise((resolve) => setTimeout(resolve, 500))
    const product = res.data

    return (
        <>
            {product ? (
                <div className="container flex py-6">
                    <div className="w-64">
                        <h2 className="font-sans text-3xl leading-10 font-bold my-8">{product.name}</h2>
                        <p className="leading-10">{product.description}</p>
                    </div>
                    <div className="h-[500px] flex-1 mx-10 bg-slate-50 p-4 rounded-lg shadow-md relative">
                        <Image src={product.image} alt={product.name} fill priority sizes="300" style={{ objectFit: 'cover' }} />
                    </div>
                    <AddCart product={product} />
                </div>
            ) : (
                <div className=" h-[calc(100%-4rem-18rem)] flex items-center w-100 mx-auto">
                    <Alert variant="warning">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>温馨提示</AlertTitle>
                        <AlertDescription>你查找的商品不存在</AlertDescription>
                    </Alert>
                </div>
            )}
        </>
    )
}
