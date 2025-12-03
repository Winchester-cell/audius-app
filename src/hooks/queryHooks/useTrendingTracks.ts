import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTrendingTracks = (searchParams: string) => {

    const getTrendingTracks = async () => {

        try {
            const res = await axios.get(`/api/tracks/trending?${searchParams || ''}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            return 'Something went wrong!'
        }

    }

    return useQuery({
        queryKey: ['tracks/trending', searchParams],
        queryFn: getTrendingTracks
    })

}

export default useTrendingTracks