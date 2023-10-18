import Link from 'next/link'
import React from 'react'

export default function Menu() {
    return (
        <ul className="p-3 shadow menu dropdown-content z-[1] bg-base-100  w-full h-full">
            <li>
                <Link href="/fabric">ผ้า/ริปบิ้น</Link>
            </li>
            <li>
                <Link href="/material">วัสดุอุปกรณ์</Link>
            </li>
            <li><a>แบบผ้า</a></li>
        </ul>
    )
}
