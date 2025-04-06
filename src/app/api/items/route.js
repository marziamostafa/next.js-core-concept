import { revalidatePath } from "next/cache";
import dbConnect from "../../../lib/dbConnect";


export async function GET() {
    const data = await dbConnect("allmedia").find({}).toArray();
    console.log(data)

    return Response.json({ data })
}

// POST route
export async function POST(req) {

    console.log(req)
    const postedData = await req.json();
    const result = await dbConnect("allmedia").insertOne(postedData)
    revalidatePath("/products")

    return Response.json(result)
}