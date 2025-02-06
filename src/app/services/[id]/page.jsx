import React from 'react'

export default async function ServiceDetailPage({ params }) {
    const {id} = await params;

    const data = [
        {
          "_id": 1,
          "name": "Web Development",
          "description": "Custom website design and development services, including responsive layouts and e-commerce solutions.",
          "price": 1500.00,
          "duration": "4-6 weeks",
          "category": "Development",
          "available": true,
          "image" : "https://img.freepik.com/premium-vector/service-filled-outline-doodle-design-illustration-symbol-white-background-eps-10-file_848977-350.jpg"
        },
        {
          "_id": 2,
          "name": "SEO Optimization",
          "description": "Search Engine Optimization services to improve your website's visibility and ranking on search engines.",
          "price": 500.00,
          "duration": "1-3 months",
          "category": "Marketing",
          "available": true,
          "image" : "https://img.freepik.com/premium-vector/service-filled-outline-doodle-design-illustration-symbol-white-background-eps-10-file_848977-350.jpg"
        },
        {
          "_id": 3,
          "name": "Mobile App Development",
          "description": "Design and development of mobile apps for both Android and iOS platforms, tailored to your business needs.",
          "price": 3000.00,
          "duration": "2-3 months",
          "category": "Development",
          "available": true,
          "image" : "https://img.freepik.com/premium-vector/service-filled-outline-doodle-design-illustration-symbol-white-background-eps-10-file_848977-350.jpg"
        },
        {
          "_id": 4,
          "name": "Graphic Design",
          "description": "Branding, logo design, and other creative services to help enhance your business's visual identity.",
          "price": 800.00,
          "duration": "1-2 weeks",
          "category": "Design",
          "available": true,
          "image" : "https://img.freepik.com/premium-vector/service-filled-outline-doodle-design-illustration-symbol-white-background-eps-10-file_848977-350.jpg"
        },
        {
          "_id": 5,
          "name": "Content Writing",
          "description": "Professional content writing services for blogs, articles, product descriptions, and more.",
          "price": 200.00,
          "duration": "1-2 weeks",
          "category": "Content",
          "available": true,
          "image" : "https://img.freepik.com/premium-vector/service-filled-outline-doodle-design-illustration-symbol-white-background-eps-10-file_848977-350.jpg"
        },
        {
          "_id": 6,
          "name": "Consulting",
          "description": "Expert consulting for digital transformation, business strategy, and technology implementation.",
          "price": 1000.00,
          "duration": "Varies",
          "category": "Consulting",
          "available": false,
          "image" : "https://img.freepik.com/premium-vector/service-filled-outline-doodle-design-illustration-symbol-white-background-eps-10-file_848977-350.jpg"
        }
    ]

    const singleData = data.find((d)=>d._id==id)
   // console.log(singleData)
    
    return (
        <div>
            <h1>ServiceDetailPage</h1>
            <p>Id : {id} </p>
            <p>{singleData.name}</p>
            <img src={singleData.image} />

        </div>
    )
}
