import { useAudioActions } from "@/stores/audioStore"
import { Track } from "@/types/tracks.type"

const usePlayAction = (track: Track, id: string | number) => {

    const {setTrack , setPlayerVisible , setPlaying , setStreamUrl} = useAudioActions()

    const playAction = () => {
        if (track) {
            setPlayerVisible(true)
            setStreamUrl(`api/tracks/${id}/stream`)
            setTrack({ ...track })
            setPlaying(true)
        }
    }
    return { playAction }
}

export default usePlayAction