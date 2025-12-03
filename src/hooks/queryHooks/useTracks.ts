import { TrackResponse } from "@/types/tracks.type"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTracks = (searchParams: string) => {

    const getTracks = async () => {
        
        try {
            const res = await axios.get(`/api/tracks/search?${searchParams || ''}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            return 'Something went wrong!'
        }

    }

    return useQuery<TrackResponse>({
        queryKey: ['tracks', searchParams],
        queryFn: getTracks
    })

}

export default useTracks