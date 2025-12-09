import { useAudioStore } from "@/stores/audioStore"
import React, { RefObject } from "react"
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa"

interface ControlsProps {
    audioRef: RefObject<HTMLAudioElement | null>,
    progressRef: RefObject<HTMLDivElement | null>,
    seekHandler: (e: React.MouseEvent) => void
    progressPercent: number | null,
}

const Controls = ({ audioRef, progressRef, seekHandler, progressPercent }: ControlsProps) => {

    const { isPlaying, setPlaying } = useAudioStore()

    return (
        <div className="h-full w-full flex flex-col justify-center items-center lg:mt-1">
            {/* media controls */}
            <div className="flex items-center gap-5">
                <FaBackward className="cursor-pointer" onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)} />
                {isPlaying ? <FaPause className="cursor-pointer" onClick={() => setPlaying(false)} /> : <FaPlay className="cursor-pointer" onClick={() => setPlaying(true)} />}
                <FaForward className="cursor-pointer" onClick={() => audioRef.current && (audioRef.current.currentTime += 10)} />
            </div>
            {/* progress bar */}
            <div onClick={seekHandler} ref={progressRef} className="hidden lg:flex cursor-pointer w-full h-2.5 px-1 items-center rounded-full lg:mt-2 bg-(--bars-color)">
                <div style={{ width: `${progressPercent}%` }} className="h-[3px] bg-(--colored-text) rounded-full"></div>
            </div>
        </div>
    )
}

export default Controls