"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

export default async function ProductAddForm() {

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;

        const payload = { productName }

        const res = await fetch("http://localhost:3000/api/items", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })

        const result = await res.json();
        console.log(result)

        form.reset()

        // alert("Product Added")
        router.push("/products")

        // router.refresh()
    }
    return (
        <div className='flex justify-center mt-8'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Product Name' name='productName' />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
