import Link from 'next/link'

import style from "./post.module.css"

import React from 'react'
const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}
// here  data is got fetched.S



export const metadata = {
    title: "All Posts ",
    description: "Loading JSON placeholder posts using server component",
};

export default async function Posts() {
    const posts = await getPosts()  // after fetching data is getting loaded here and html is created
    console.log(posts)
    return (                          // as html is created they are directly loaded in the browser
        <div className='grid grid-cols-3 gap-3'>
            {
                posts.map((p) => {
                    return (
                        <div key={p.id} className='border-2 border-slate-800 p-4'>
                            <p className={`text-2xl font-bold ${style["post-title"]}`}>{p.title}</p>
                            <p className='testing-purpose-css-class'>{p.body}</p>
                            <Link href={`/posts/${p.id}`}><button className='border bg-slate-500 rounded p-2'>Details</button></Link>
                        </div>
                    )


                })
            }
        </div>
    )
}
