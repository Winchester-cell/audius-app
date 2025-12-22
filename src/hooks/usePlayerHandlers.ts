import { useAudioActions, useIsPlaying, useStreamUrl, useTrack } from "@/stores/audioStore"
import { RefObject, useEffect, useState } from "react"

interface UsePlayerHandlersProps {
    audioRef: RefObject<HTMLAudioElement | null>
    progressRef: RefObject<HTMLDivElement | null>
    progressMobileRef: RefObject<HTMLDivElement | null>
}

const usePlayerHandlers = ({ audioRef, progressRef, progressMobileRef }: UsePlayerHandlersProps) => {

    const track = useTrack()
    const streamUrl = useStreamUrl()
    const isPlaying = useIsPlaying()
    const {setPlayerVisible , setPlaying } = useAudioActions()

    const [progressPercent, setProgressPercent] = useState<number | null>(null)
    const [trackMinutes, setTrackMinutes] = useState<number | null>(null)
    const [trackSecond, setTrackSecond] = useState<number | null>(null)
    const [currentTrackMinutes, setCurrentTrackMinutes] = useState<number | null>(null)
    const [currentTrackSecond, setCurrentTrackSecond] = useState<number | null>(null)

    // handle play or pause the audio :)
    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
    }, [isPlaying, streamUrl, track])


    // player time update
    const playerHandler = () => {
        if (audioRef.current) {
            setTrackMinutes(Math.floor(audioRef.current.duration / 60))
            setTrackSecond(Math.floor(audioRef.current.duration % 60))
            setCurrentTrackMinutes(Math.floor(audioRef.current.currentTime / 60))
            setCurrentTrackSecond(Math.floor(audioRef.current.currentTime % 60))
            const currentTimePercent = audioRef.current.currentTime / audioRef.current.duration * 100
            setProgressPercent(currentTimePercent)
        }
    }

    // click on progress bar to set current music time to clicked spot
    const seekHandler = (e: React.MouseEvent) => {
        if (progressRef.current && audioRef.current) {
            const progressbarWidth = progressRef.current.clientWidth
            const offsetX = e.nativeEvent.offsetX
            const clickedCurrentTime = offsetX / progressbarWidth * audioRef.current.duration
            audioRef.current.currentTime = clickedCurrentTime
            setProgressPercent(offsetX / progressbarWidth * 100)
        }

    }
    //  mobile version
    const seekHandlerMobile = (e: React.MouseEvent) => {
        if (progressMobileRef.current && audioRef.current) {
            const progressbarWidth = progressMobileRef.current.clientWidth
            const offsetX = e.nativeEvent.offsetX
            const clickedCurrentTime = offsetX / progressbarWidth * audioRef.current.duration
            audioRef.current.currentTime = clickedCurrentTime
            setProgressPercent(offsetX / progressbarWidth * 100)
        }
    }

    // exit handle 
    const exitHandler = () => {
        setPlaying(false)
        setProgressPercent(0)
        setPlayerVisible(false)
    }


    return {
        progressPercent,
        setProgressPercent,
        trackMinutes,
        setTrackMinutes,
        trackSecond,
        setTrackSecond,
        currentTrackMinutes,
        setCurrentTrackMinutes,
        currentTrackSecond,
        setCurrentTrackSecond,
        playerHandler,
        seekHandler,
        seekHandlerMobile,
        exitHandler
    }
}

export default usePlayerHandlers