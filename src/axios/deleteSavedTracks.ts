import { SavedPlaylistPayload, SavedTrackPayload } from "@/types/saved-list.type";
import axios from "axios";

export const deleteSavedTrack = async (track: SavedTrackPayload) => {
    const res = await axios.delete(`/api/savedTracks`, { data: track })
    return res
}