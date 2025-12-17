import { SavedPlaylistPayload, SavedTrackPayload } from "@/types/saved-list.type";
import axios from "axios";

export const saveTrack = async (track: SavedTrackPayload) => {
    const res = await axios.post(`/api/savedTracks`, track)
    return res
}