import { getAllProducts } from '@/actions/products'
import Products from '@/components/Products'
import Sort from '@/components/Sort'

export default async function Page() {
    const res = await getAllProducts()
    await new Promise((resolve) => setTimeout(resolve,1000))
    return (
        <div className="container flex py-6">
            <Sort />
            <Products data={res.data} />
        </div>
    )
}
