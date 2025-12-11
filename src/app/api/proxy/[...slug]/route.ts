import { mainApi } from "@/axios/mainApi";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    try {
        const paramsArry = await params
        const fullEndPoint = `/${paramsArry.slug.join('/')}/`
        console.log(fullEndPoint);
        const res = await mainApi.get(fullEndPoint)
        return Response.json(res.data, { status: 200 })
    } catch (err) {
        console.log('Error : ', err);
        return Response.json({ msg: 'Server Error' }, { status: 500 })
    }
}