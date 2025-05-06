'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useSortStore } from '@/store'
import { SortValue } from '@/types/global'

export default function Sort() {
    const { setValue } = useSortStore()
    const handleChange = (value: SortValue) => {
        setValue(value)
    }

    return (
        <div className="w-64 py-4">
            <p className="m-5 text-xl">Sort</p>
            <ToggleGroup className="flex-col gap-3" type="single" defaultValue="latest" onValueChange={handleChange}>
                <ToggleGroupItem value="latest">Latest Arrivals</ToggleGroupItem>
                <ToggleGroupItem value="Low">Price: Low -&gt High</ToggleGroupItem>
                <ToggleGroupItem value="High">Price: High -&gt Low</ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}
