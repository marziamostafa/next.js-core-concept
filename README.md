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
Next.js is a react framework that gives you buildig blocks to create web application.

By framework, we mean NEXT.js handles the tooling and configuration needed for React.

It provides additional structure, features and optimization for your application

## initiate creating next.js app
npx create-next-app@latest

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

