import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Title, NavList } from '@/lib/constants'
export default function Footer() {
    return (
        <div className="border-t mt-6">
            <div className="container py-32 flex justify-between">
                <h2 className="text-2xl">
                    <Link href="/">{Title}</Link>
                </h2>
                <div className="grid-cols-3 gap-10 flex">
                    {NavList.map((item, i) => (
                        <>
                            {i !== 0 && <Separator orientation="vertical" />}
                            <div key={item.title} className='text-center'>
                                <span>{item.title}</span>
                                <ul className="m-4 space-y-3 text-left">
                                    {item.list.map((items) => (
                                        <li key={items.text}>{items.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
