import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const usePlaylists = (searchParams: string) => {

    const getPlaylists = async () => {
        
        try {
            const res = await axios.get(`/api/playlists/search?${searchParams || ''}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (err) {
            return 'Something went wrong!'
        }

    }

    return useQuery({
        queryKey: ['playlists', searchParams],
        queryFn: getPlaylists
    })

}

export default usePlaylists