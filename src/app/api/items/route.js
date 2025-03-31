import { error } from "console"

export async function GET() {
    const data = {
        message: "successfully get data",
        error: false,
        status: 200
    }


    return Response.json({ data })
}

// POST route
export async function POST(req) {

    console.log(req)
    const postedData = await req.json();


    return Response.json({ postedData })
}