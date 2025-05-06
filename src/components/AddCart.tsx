'use client'
import { Product } from '@/types/global'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function AddCart({ product }: { product: Product }) {
    const [value, setValue] = useState<string>('')

    const handleChange = (value: string) => {
        setValue(value)
    }
    return (
        <div className="w-80 py-12">
            <h3>Select</h3>
            <ToggleGroup className="justify-start py-6 border-b mb-6" variant="outline" type="single" onValueChange={handleChange}>
                {product.variant.map((item, i) => (
                    <ToggleGroupItem className="px-4 bg-slate-50 mr-3" key={i} value={item}>
                        {item}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
            <h3>Price</h3>
            <p className="text-2xl font-bold text-red-400 mb-6">${product.price}</p>
            <Button disabled={!value ? true : false} className="w-full">
                Add to Cart
            </Button>
        </div>
    )
}
