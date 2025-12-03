
import { mainApi } from "@/axios/mainApi";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    try {
        const {playlistID} = await params
        const res = await mainApi.get(`/playlists/${playlistID}/tracks`)
        return Response.json(res.data, { status: 200 })
    } catch (err) {
        console.log('Error : ', err);
        return Response.json({ msg: 'Server Error' }, { status: 500 })
    }
}