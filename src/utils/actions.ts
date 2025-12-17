import { deleteSavedPlaylist } from "@/axios/deleteSavedPlaylist"
import { deleteSavedTrack } from "@/axios/deleteSavedTracks"
import { savePlaylist } from "@/axios/savePlaylist"
import { saveTrack } from "@/axios/saveTrack"
import { SavedPlaylistPayload, SavedTrackPayload } from "@/types/saved-list.type"
import { Dispatch, SetStateAction } from "react"

export const saveTrackHandler = async (target: SavedTrackPayload, setIsSaved: Dispatch<SetStateAction<boolean>>) => {
    const res = await saveTrack(target)
    if (res.status === 201) {
        setIsSaved(true)
    }
}


export const removeSavedTrackHandler = async (target: SavedTrackPayload, setIsSaved: Dispatch<SetStateAction<boolean>>) => {
    const res = await deleteSavedTrack(target)
    if (res.status === 200) {
        setIsSaved(false)
    }
}


export const savePlaylistHandler = async (target: SavedPlaylistPayload, setIsSaved: Dispatch<SetStateAction<boolean>>) => {
    const res = await savePlaylist(target)
    if (res.status === 201) {
        setIsSaved(true)
    }
}



export const removeSavedPlaylistHandler = async (target: SavedPlaylistPayload, setIsSaved: Dispatch<SetStateAction<boolean>>) => {
    const res = await deleteSavedPlaylist(target)
    if (res.status === 200) {
        setIsSaved(false)
    }
}