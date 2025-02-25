import React from 'react'

export default async function AboutSlugPages({params}) {
  const p = await params;
  console.log(p) //as its a server component, console will be shown in server terminal
  return (
    <div>AboutSlugPages</div>
  )
}
