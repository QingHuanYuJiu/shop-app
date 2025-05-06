import { SortValue } from '@/types/global'
import { create } from 'zustand'
type SortState = {
    value: SortValue
    setValue: (value: SortValue) => void
}
const useSortStore = create<SortState>((set) => ({
    value: 'latest',
    setValue: (value) => set({ value })
}))

export default useSortStore
