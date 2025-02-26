import { NextResponse } from 'next/server'
import React from 'react'

// This function can be marked `async` if using `await` inside
// export default function middleware(request) {
//     return NextResponse.redirect(new URL('/', request.url))
// }

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*', // it will be triggeres when we will use the about path and redirect us to the home
// }

// when we are requesting 'middleware(request)' for the about page. the request is read by (request) parameter. 
// after getting the request  as next response its  redirecting to the "/" page


// if we want to trigger it for every path
export default function middleware(request){


    const currentCookie = request.cookies.get('nextjs-token')

    console.log(currentCookie)
    console.log(currentCookie.value)
    

    const dummyUserData = {
        role : "user",
        email : "test@admin.com"
    }
    let isServicesPage = request.nextUrl.pathname.includes("/services")
    let isAdmin = dummyUserData.role == 'admin'

    if(isServicesPage && !isAdmin){
        return NextResponse.redirect(new URL('/login', request.url))
       // return NextResponse.rewrite(new URL('/login', request.url))
    }
    
    return NextResponse.next()
}

// this middleware is getting all requests and without any checking letting it to go another step
// means forwarding request to the server
