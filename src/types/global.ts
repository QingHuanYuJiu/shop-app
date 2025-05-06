export type SortValue = 'latest' | 'Low' | 'High'

export type Product = {
    id: number
    name: string
    price: number
    description: string
    image: string
    variant: string[]
}

export type GetAllProductsAction = {
    status: number
    body: string
    data: Product[]
}

export type GetProductsAction = {
    status: number
    body: string
    data: Product
}
