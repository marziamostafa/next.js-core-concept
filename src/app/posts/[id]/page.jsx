import React from 'react'
export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json()
    return data
}


// --------dynamic title function----------
export async function generateMetadata({ params}) {
    // read route params
    const { id } = await params
   
    // fetch data
    const product = await fetch(`https://.../${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.title,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  }


export default async function SinglePost({ params }) {
    const p = await params;
    const singlePost = await getSinglePost(p.id)
    console.log(p.id)
    return (
        <div>
            {/* jsx only supports string/ primitive type data so we need to convert the object to string using JSON.stringify */}
            <p> {JSON.stringify(singlePost)} </p>

            <h1 className='text-2xl font-bold'>Title : {singlePost.title}</h1>
            <p>Body : {singlePost.body}</p>

        </div>
    )
}
