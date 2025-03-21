"use client";

import { usePathname, useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'


export default function MealSearchInput() {
    //const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
        const searchQuery = { search }
        const urlQueryParams = new URLSearchParams(searchQuery)
        const url = router.push(`${pathName}?${urlQueryParams}`)
    }, [search])
    return (

        <div className='flex justify-center'>
            <input className='border-2 mb-2' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

    )
}
