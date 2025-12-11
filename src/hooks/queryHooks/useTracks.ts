import { TrackResponse } from "@/types/tracks.type"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTracks = (searchParams: string, isInview: boolean) => {

    const getTracks = async () => {

        try {
            const res = await axios.get(`/api/proxy/tracks/search?${searchParams || ''}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            throw new Error('Something went wrong')
        }

    }

    return useQuery<TrackResponse>({
        queryKey: ['tracks', searchParams],
        queryFn: getTracks,
        enabled: isInview
    })

}

export default useTracks