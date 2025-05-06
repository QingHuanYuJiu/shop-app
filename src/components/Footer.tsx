import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Title, NavList } from '@/lib/constants'
import { Fragment } from 'react'

export default function Footer() {
    return (
        <div className="border-t mt-6">
            <div className="container py-32 flex justify-between">
                <h2 className="text-2xl">
                    <Link href="/">{Title}</Link>
                </h2>
                <div className="flex gap-10 ">
                    {NavList.map((item, i) => (
                        <Fragment key={item.title}>
                            {i !== 0 && <Separator orientation="vertical" />}
                            <div className="text-center">
                                <span>{item.title}</span>
                                <ul className="m-4 space-y-3 text-left">
                                    {item.list.map((items) => (
                                        <li key={items.text}>{items.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}
