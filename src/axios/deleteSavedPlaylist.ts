import { SavedPlaylistPayload } from "@/types/saved-list.type";
import axios from "axios";

export const deleteSavedPlaylist = async (playlist: SavedPlaylistPayload) => {
    const res = await axios.delete(`/api/savedPlaylists`, { data: playlist })
    return res
}