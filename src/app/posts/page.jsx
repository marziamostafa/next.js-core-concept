import React from 'react'
export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

// here  data is got fetched.

export default async function Posts() {
    const posts = await getPosts()  // after fetching data is getting loaded here and html is created
    console.log(posts)
    return (                          // as html is created they are directly loaded in the browser
        <div className='grid grid-cols-3 gap-3'>
            {
                posts.map((p) => {
                    return (
                        <div key={p.id}>
                            <p>{p.title}</p>
                            <p>{p.body}</p>
                        </div>
                    )


                })
            }
        </div>
    )
}
