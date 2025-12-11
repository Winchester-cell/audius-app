import { TrackResponse } from "@/types/tracks.type"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTrendingTracks = (searchParams: string , isInview:boolean) => {

    const getTrendingTracks = async () => {

        try {
            const res = await axios.get(`/api/proxy/tracks/trending?${searchParams || ''}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            throw new Error('Something went wrong')
        }

    }

    return useQuery<TrackResponse>({
        queryKey: ['tracks/trending', searchParams],
        queryFn: getTrendingTracks,
        enabled:isInview
    })

}

export default useTrendingTracks