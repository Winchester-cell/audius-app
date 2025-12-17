import { savedPlaylistsModel } from "@/models/savedPlaylist";
import { SavedPlaylistPayload } from "@/types/saved-list.type";
import { getNextAuthSession } from "@/utils/api/getNextAuthSession";
import dbConnect from "@/utils/database/dbConnect";
import { NextRequest } from "next/server";

const isValidPayload = (body: any): body is SavedPlaylistPayload => {
    return (
        typeof body.playlistID === "string" &&
        typeof body.playlistName === "string" &&
        (
            typeof body.image === "string" ||
            body.image === null
        ) &&
        typeof body.creatorName === "string"
    )
}


export async function POST(req: NextRequest) {
    try {

        const session = await getNextAuthSession()

        if (!session) {
            return Response.json({ msg: 'unauthorized' }, { status: 401 })
        }

        await dbConnect()

        const body = await req.json()
        console.log('body is = ', body);


        if (!isValidPayload(body)) {
            return Response.json({ msg: 'Invalid payload' }, { status: 400 })
        }

        const savedPlaylistCount = await savedPlaylistsModel.countDocuments({ userID: session.user.id })

        if (savedPlaylistCount >= 300) {
            return Response.json({ msg: 'Maximum reached' }, { status: 403 })
        }

        const isExist = await savedPlaylistsModel.findOne({ playlistID: body.playlistID, userID: session.user.id })

        if (isExist) {
            return Response.json({ msg: 'Item already saved' }, { status: 409 })
        }

        const savedPlaylist = { ...body, userID: session.user.id }
        await savedPlaylistsModel.create(savedPlaylist)

        return Response.json({ msg: 'Testing works fine' }, { status: 201 })

    } catch (err) {

        console.log('Error =>', err);
        return Response.json({ msg: 'Server Error' }, { status: 500 })

    }
}


export async function GET() {
    try {

        const session = await getNextAuthSession()

        if (!session) {
            return Response.json({ msg: 'unauthorized' }, { status: 401 })
        }

        await dbConnect()

        const savedList = await savedPlaylistsModel.find({ userID: session.user.id })

        return Response.json(savedList, { status: 200 })

    } catch (err) {

        console.log('Error =>', err);
        return Response.json({ msg: 'Server Error' }, { status: 500 })

    }
}

export async function DELETE(req: NextRequest) {
    try {
        const session = await getNextAuthSession()

        if (!session) {
            return Response.json({ msg: 'unauthorized' }, { status: 401 })
        }

        await dbConnect()
        const body = await req.json()

        if (!isValidPayload(body)) {
            return Response.json({ msg: 'Invalid payload' }, { status: 400 })
        }

        const deleted = await savedPlaylistsModel.findOneAndDelete({ playlistID: body.playlistID, userID: session.user.id })

        if (!deleted) {
            return Response.json({ msg: 'Item not found' }, { status: 404 })
        }

        return Response.json({ msg: 'Removed from save' }, { status: 200 })

    } catch (err) {

        console.log('Error =>', err);
        return Response.json({ msg: 'Server Error' }, { status: 500 })

    }
}