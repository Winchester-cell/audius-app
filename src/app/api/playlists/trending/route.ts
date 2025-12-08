import { mainApi } from "@/axios/mainApi";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const seachParams = req.nextUrl.searchParams.toString()
        const res = await mainApi.get(`/playlists/trending?${seachParams}`)
        return Response.json(res.data, { status: 200 })
    } catch (err) {
        console.log('Error : ', err);
        return Response.json({ msg: 'Server Error' }, { status: 500 })
    }
}