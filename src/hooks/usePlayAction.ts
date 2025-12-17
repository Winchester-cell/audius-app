import { useAudioStore } from "@/stores/audioStore"
import { Track } from "@/types/tracks.type"

const usePlayAction = (track: Track, id: string | number) => {

    const setTrack = useAudioStore(state => state.setTrack)
    const setStreamUrl = useAudioStore(state => state.setStreamUrl)
    const setPlaying = useAudioStore(state => state.setPlaying)
    const setPlayerVisible = useAudioStore(state => state.setPlayerVisible)

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