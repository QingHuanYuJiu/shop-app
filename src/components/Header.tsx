import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Title, Menulist } from '@/lib/constants'
import { Fragment } from 'react'

export default function Header() {
    return (
        <div className="h-16 px-10 border-b bg-white">
            <div className="container flex items-center justify-between h-full">
                <h1 className="text-2xl">
                    <Link href="/">{Title}</Link>
                </h1>
                <div className="flex justify-end space-x-4 text-sm h-1/3">
                    {Menulist.map((item, i) => (
                        <Fragment key={item.text}>
                            {i !== 0 && <Separator orientation="vertical" />}
                            <Link href={item.href}>{item.text}</Link>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}
