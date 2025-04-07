

import { redirect } from 'next/navigation'
import React from 'react'

export default async function ProductPage() {
    const res = await fetch("http://localhost:3000/api/items", {
        cache: "force-cache"
    })
    const { data } = await res.json()

    console.log(data)

    // if (data.length > 5) {
    //     redirect("/")
    // }


    return (
        <div className='flex justify-center mt-8'>
            <ul>
                {
                    data?.map((d) => (
                        <li key={d._id}>{d.productName}</li>
                    ))
                }
            </ul>
        </div>
    )
}
