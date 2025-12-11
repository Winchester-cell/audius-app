import { PlaylistResponse } from "@/types/playlist.type"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTrendingPlaylists = (searchParams: string, isInview: boolean) => {

    const getTrendingPlaylists = async () => {

        try {
            const res = await axios.get(`/api/proxy/playlists/trending?${searchParams || ''}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            throw new Error('Something went wrong')
        }

    }

    return useQuery<PlaylistResponse>({
        queryKey: ['playlists/trending', searchParams],
        queryFn: getTrendingPlaylists,
        enabled: isInview
    })

}

export default useTrendingPlaylists