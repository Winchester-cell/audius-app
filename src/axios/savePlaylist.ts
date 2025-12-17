import { SavedPlaylistPayload } from "@/types/saved-list.type";
import axios from "axios";

export const savePlaylist = async (playlist:SavedPlaylistPayload) => {
    const res = await axios.post(`/api/savedPlaylists` , playlist)
    return res
}