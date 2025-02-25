This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# next.js overview
Next.js is a React framework that gives you buildig blocks to create web application.

By framework, we mean NEXT.js handles the tooling and configuration needed for React.

It provides additional structure, features and optimization for your application

Providing some options:
1. Built in optimization (image, font , icons are optimized and make performance better)
2. Pre-rendering (SSG + SSR)
3. Next level data fetching (React had client site data fetching but next.js has server site data fetching)
4. Powerful routing and layouts (Next.js has its built in routing where react used third party)
5. API routes (We had to use express and node.js and create a backend server but next.js has it built in)

# Why Next.js?
1. It's a fullstack framework
2. blazingly fast because of pre-
3. Contents are pre-generated
4. so site is SEO friendly

--> Framework: A framework can have multiple libraries. Framework already have third-party dependencies (Built in routing system, Api Routes, NextAuth for authetication)

-->Library: If we use library we need to install third-party packages  (React-router-dom, firebase, backend server using express)

## What is rendering?
--> the process of turning HTML, CSS and JavaScript code into an interactive page  that website visitors exoect to see

--> rendering is of two types: pre-rendering(Next.js) and client site rendering (React)

--> Pre-rendering is of two types: SSG(Static site generation) and SSR( Server side rendering)

## CSR(client site rendering)

is a way of rendering web pages where most of the work is done in the browser (the client), not on the server.

1.  The server sends a basic page and some instructions (JavaScript) to your browser.
2.  The browser then takes those instructions, gets the full content (like text and images), and shows you the page.
3.  After the page is loaded, if you click buttons or do things on the site, the browser can update the page without needing to reload it.


## pre-rendering
--> the HTML gets re-generated from the server at first  then becomes visiblle in our website.

pre-rendering can be two types: SSG(Static site generation) and SSR( Server side rendering); bothe from  the server but SSG is in built in and SSR is in on user request

## SSG(Static site generation)
We see the contents that are already deployed in the vercel and it gets visible. no dynamic content is there

This means that Next.js generates the pages of your website ahead of time when you build your site. These pages are ready to be shown to users immediately, making your website load super fast.

Content gets generated in built time and content just become viusible when we hit on the deloyed url

## SSR( Server side rendering)
This means that when a user requests a page, the page is generated on the server at that moment, then sent to the user's browser. This is great for dynamic content that needs to be updated each time someone visits.

Data is not geting ready in built time, based on user request it gets generated from the server and then becomes visible to the browser


## initiate creating next.js app
npx create-next-app@latest "app_name"

Why not using App Router?

--> The component we will create on app router like react, they will be server component, that will be generated from the server. These server components does not support many component libraries (like CSS library)

--> again we use "use client" at the top to define client site rendering
## npm run build
production code will be generated and run

## npm run start
production environment code will be run

## npm run dev
to run the application


--> page.js file is loaded as children of layout.js

--> page.js is the main home page

--> check nextjs -->get started -->project structure

## route
--> to create a route a folder is needed under the app folder

--> inside the folder file name must be page.js / page.jsx

--> Component name can be anything

--> after that route will be automatically created

--> for every route foder name will be similar to route name but page.jsx will be there

--> no capital letter will be there in route folder name, only lowercase

--> the route can be accessed by : http://localhost:3000/routeName

## route under route: nested route
--> now if we want to create another route under about

--> we need to create a folder named in lowercase with the exact same name under the service route

--> inside the child route there will be again page.jsx file

--> the route can be accessed by : http://localhost:3000/about/address


## linking and navigation
--> <Link></Link> from next/link ; a built-in component that extends the HTML <a> tag to provide prefetching. (it fetch the component related things before clicking on it)

--> inside tag 'href' prop is a must

--> Another way is: using the useRouter()  hook

--> there are two useRouter()  hooks ; one from next/router another from next/navigation

--> we need the one from next/navigation

--> we can make private route with it

![alt text](image-1.png)
![alt text](image.png)

## dynamic route
--> create a folder under a route with name like : [id]

--> create a page.jsx file under it 

--> we can get the id by params ({params})

--> we can access the route by id  ; like params.id

--> the route will look like this : http://localhost:3000/services/2


## group route
we can organize if there are so many folders using the () under the app folder. we can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.

for example , under the (authPages) there  are login and  register folder. now we don't access it like 
"/(authPages)/login"

here we can access it like --> "/login" directlty (http://localhost:3000/login)

## show  different layout for diffent route
inside the group route (dashboard) we will create another layout.jsx file.

and we must the the {children} as parameter on that layout function

![alt text](image-2.png)

for individual layout we can even add layout.jsx inside the individual folder. like inside the user-dashboard folder we can create another layout.jsx.


## get the path of the current route
need a hook for that usePathname() from 'next/navigation

const pathName = usePathname()

console.log(pathName,pathName.includes("dashboard"))

![alt text](image-3.png)


## home/dynamic/dynamic/dynamic routes : catch all segments
[...id]  /   [...slugs]

here we want to catch all the routes dynamically

we must open page.jsx and add {params}

To check more: in next.js page--> dynamic routres-->catch all segments

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)





