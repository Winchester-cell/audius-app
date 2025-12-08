import { PlaylistResponse } from "@/types/playlist.type"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTrendingPlaylists = (searchParams: string) => {

    const getTrendingPlaylists = async () => {
        
        try {
            const res = await axios.get(`/api/playlists/trending?${searchParams || ''}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            return 'Something went wrong!'
        }

    }

    return useQuery<PlaylistResponse>({
        queryKey: ['playlists/trending', searchParams],
        queryFn: getTrendingPlaylists
    })

}

export default useTrendingPlaylists