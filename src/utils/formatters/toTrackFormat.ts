import { SavedTrackPayload } from "@/types/saved-list.type";
import { Track } from "@/types/tracks.type";

export const toTrackFormat = (saved: SavedTrackPayload): Track => ({
  id: saved.trackID,
  title: saved.trackTitle,
  duration: 0, 
  genre: "Unknown", 
  artwork: {
    "150x150": saved.image,
    "480x480": saved.image,
    "1000x1000": saved.image
  },
  mood:"",
  description:"",
  user: {
    id: "", 
    handle: "", 
    name: saved.uploaderName,
    profile_picture: {
      "150x150": "", 
      "480x480": "",
      "1000x1000": ""
    }
  }
})
