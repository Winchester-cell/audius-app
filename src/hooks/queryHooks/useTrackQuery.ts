import { Track } from "@/types/tracks.type"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Response {
    data: Track
}

const useTrackQuery = (trackID: string | number) => {

    const getTrack = async () => {

        try {
            const res = await axios.get(`/api/proxy/tracks/${trackID}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            throw new Error('Something went wrong')
        }

    }

    return useQuery<Response>({
        queryKey: ['track', trackID],
        queryFn: getTrack,
    })

}

export default useTrackQuery