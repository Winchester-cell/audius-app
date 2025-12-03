
import { mainApi } from "@/axios/mainApi";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    try {
        const { trackID } = await params
        const res = await mainApi.get(`/tracks/${trackID}/stream`, { responseType: "arraybuffer" })
        console.log(res.data);
        // what should i return ?
        return new Response(res.data, {
            status: 200,
            headers: {
                "Content-Type": "audio/mpeg",
                "Content-Length": res.data.byteLength.toString(),
                "Cache-Control": "no-cache",
            },
        });
    } catch (err) {
        console.log('Error : ', err);
        return Response.json({ msg: 'Server Error' }, { status: 500 })
    }
}