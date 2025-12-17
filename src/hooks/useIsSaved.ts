import { useEffect, useState } from "react"
import useSavedPlaylists from "./queryHooks/useSavedPlaylists"
import useSavedTracks from "./queryHooks/useSavedTracks"

const useIsSaved = (targetID: string | number, targetType: 'playlist' | 'track') => {

    const [isSaved, setIsSaved] = useState(false)

    const { data: savedPlaylistsData } = useSavedPlaylists()
    const { data: savedTacksData } = useSavedTracks()

    useEffect(() => {

        if (savedPlaylistsData && targetType === 'playlist') {
            const isAvailable = savedPlaylistsData.some(item => item.playlistID === targetID)
            if (isAvailable) {
                setIsSaved(true)
            }
        }

        if (savedTacksData && targetType === 'track') {
            const isAvailable = savedTacksData.some(item => item.trackID === targetID)
            if (isAvailable) {
                setIsSaved(true)
            }
        }


    }, [savedPlaylistsData, savedTacksData, targetID, targetType])



    return { isSaved, setIsSaved }
}

export default useIsSaved