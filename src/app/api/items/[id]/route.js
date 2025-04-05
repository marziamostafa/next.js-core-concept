//GET

import dbConnect from "../../../../lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const p = await params;
    console.log(p)

    const singleData = await dbConnect("allmedia").findOne({ _id: new ObjectId(p.id) })


    return Response.json(singleData)
}

// delete
export async function DELETE(req, { params }) {
    const p = await params;
    // console.log(p)
    const deleteResponse = await dbConnect("allmedia").deleteOne({ _id: new ObjectId(p.id) })

    return Response.json(deleteResponse)
}

// patch
export async function PATCH(req, { params }) {
    const p = await params;
    // console.log(p)

    const postedData = await req.json()
    const filter = { _id: new ObjectId(p.id) }

    const updatedResponse = await dbConnect("allmedia").updateOne(filter, { $set: { ...postedData } }, { upsert: true })


    return Response.json(updatedResponse)
}