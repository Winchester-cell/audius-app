'use client'
import { useAudioStore } from "@/stores/audioStore"
import { extractContentId } from "@/utils/extractContentID"
import { useEffect, useRef, useState } from "react"
import { CgClose } from "react-icons/cg"
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa"

const AudioPlayer = ({ openClass }: any) => {

  const { track, streamUrl, isPlaying, setPlaying } = useAudioStore()
  const [progressPercent, setProgressPercent] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const imageBaseUrl = `https://audius-discovery-7.cultur3stake.com/content`
  const artWorkID = track ? extractContentId(track.artwork["150x150"]) : null
  const artSize = `150x150`

  // handle play or pause the audio :)
  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
  }, [isPlaying])
  // handle url change
  useEffect(() => {
    if (!audioRef.current) return
    setProgressPercent(0)
    audioRef.current.load()
    if (isPlaying) audioRef.current.play()
  }, [streamUrl])


  const playerHandler = () => {
    if (audioRef.current) {
      const currentTimePercent = audioRef.current.currentTime / audioRef.current.duration * 100
      setProgressPercent(currentTimePercent)
    }
  }

  return (
    <div className={`${openClass} absolute bottom-0 end-0 z-50 h-[90px] py-3 px-10 transition-transform duration-500`}>
      <div className="py-3 px-7 rounded-full relative flex items-center justify-between transition-all duration-500 select-none w-full h-full bg-(--main-bg) border-2 border-(--alt-text)">
        {streamUrl && <audio onTimeUpdate={playerHandler} ref={audioRef} className="hidden" src={streamUrl}></audio>}
        {/* Audio Info */}
        <div className="h-full w-full flex gap-2 items-center">
          {
            track &&
            <>
              <img className="h-full w-auto rounded-lg" src={`${imageBaseUrl}/${artWorkID}/${artSize}`} alt="" />
              <div>
                <div className="font-semibold text-(--colored-text) line-clamp-1">{track.title}</div>
                <div className="text-[10px] line-clamp-1">{track.user.name}</div>
              </div>
            </>
          }
        </div>
        {/* Player Controls */}
        <div className="h-full w-full flex flex-col justify-center items-center mt-1">
          {/* media controls */}
          <div className="flex items-center gap-5">
            <FaBackward onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)} />
            {isPlaying ? <FaPause onClick={() => setPlaying(false)} /> : <FaPlay onClick={() => setPlaying(true)} />}
            <FaForward onClick={() => audioRef.current && (audioRef.current.currentTime += 10)} />
          </div>
          {/* progress bar */}
          <div className="w-full h-2.5 px-1 flex items-center rounded-full mt-2 bg-(--bars-color)">
            <div style={{ width: `${progressPercent}%` }} className="h-[3px] bg-(--colored-text) rounded-full"></div>
          </div>
        </div>
        {/* Exit */}
        <div className="h-full w-full flex justify-end items-center">
          <CgClose onClick={() => setPlaying(false)} />
        </div>
        {/* blur layer */}
        <div className="h-[60px] w-full absolute backdrop-blur-sm -bottom-10 start-0 -z-10" />
      </div>
    </div>
  )
}

export default AudioPlayer 