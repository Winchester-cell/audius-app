import useIsSaved from '@/hooks/useIsSaved'
import { useAudioActions, useIsPlaying, useStreamUrl, useTrack } from '@/stores/audioStore'
import { removeSavedTrackHandler, saveTrackHandler } from '@/utils/actions'
import { formatTimer } from '@/utils/formatters/formatTimer'
import Link from 'next/link'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { CiHeart } from 'react-icons/ci'
import { FaDownload, FaPause, FaPlay } from 'react-icons/fa'

interface OptionProps {
    imageUrl: string | null
    currentTrackMinutes: number | null,
    currentTrackSecond: number | null,
    trackMinutes: number | null,
    trackSecond: number | null,
    exitHandler: () => void
}

const Options = ({ exitHandler, currentTrackMinutes, currentTrackSecond, trackMinutes, trackSecond, imageUrl }: OptionProps) => {

    const track = useTrack()
    const streamUrl = useStreamUrl()
    const isPlaying = useIsPlaying()
    const { setPlaying } = useAudioActions()
    const { isSaved, setIsSaved } = useIsSaved(track ? track.id : '', 'track')

    return (
        <div className="h-full w-full flex justify-end items-center gap-4 lg:gap-10">
            {/* timers */}
            {
                <div className="flex items-center gap-1 lg:gap-3 text-[8px] lg:text-[12px]">
                    <div>
                        <span>{formatTimer(currentTrackMinutes)}</span>
                        :
                        <span>{formatTimer(currentTrackSecond)}</span>
                    </div>
                    <div>/</div>
                    <div>
                        <span>{formatTimer(trackMinutes)}</span>
                        :
                        <span>{formatTimer(trackSecond)}</span>
                    </div>
                </div>
            }
            {isPlaying ? <FaPause className="cursor-pointer lg:hidden" onClick={() => setPlaying(false)} /> : <FaPlay className="cursor-pointer lg:hidden" onClick={() => setPlaying(true)} />}
            {/* download save */}
            <div className="flex items-center gap-2 lg:gap-5">
                {/* save */}
                {
                    track &&
                    <div className='cursor-pointer'>
                        {isSaved ? (
                            <AiFillHeart onClick={() => removeSavedTrackHandler({ uploaderName: track.user.name, trackTitle: track.title, trackID: track.id, image: imageUrl }, setIsSaved)} className="size-4 lg:size-6 text-pink-500" />
                        ) : (
                            <CiHeart onClick={() => saveTrackHandler({ uploaderName: track.user.name, trackTitle: track.title, trackID: track.id, image: imageUrl }, setIsSaved)} className="size-4 lg:size-6 " />
                        )}
                    </div>
                }
                {/* download */}
                <Link target="_blank" href={streamUrl}>
                    <FaDownload className="lg:size-5" />
                </Link>
            </div>
            {/* exit */}
            <button>
                <CgClose className="lg:size-5" onClick={exitHandler} />
            </button>
        </div>
    )
}

export default Options