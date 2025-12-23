import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const usePlaylistTracksQuery = (playlistID: any) => {

    const getPlaylistTracks = async () => {

        try {
            const res = await axios.get(`/api/playlists/${playlistID}/tracks`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            return 'Something went wrong!'
        }

    }

    return useQuery({
        queryKey: ['playlist/tracks', playlistID],
        queryFn: getPlaylistTracks
    })

}

export default usePlaylistTracksQuery