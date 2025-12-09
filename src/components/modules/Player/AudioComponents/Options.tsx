import { useAudioStore } from '@/stores/audioStore'
import { formatTimer } from '@/utils/formatTimer'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { FaDownload, FaPause, FaPlay } from 'react-icons/fa'

interface OptionProps {
    currentTrackMinutes: number | null,
    currentTrackSecond: number | null,
    trackMinutes: number | null,
    trackSecond: number | null,
    exitHandler: () => void
}

const Options = ({ exitHandler, currentTrackMinutes, currentTrackSecond, trackMinutes, trackSecond }: OptionProps) => {

    const { streamUrl, isPlaying, setPlaying } = useAudioStore()

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
                <AiOutlineHeart className="size-4 lg:size-6 cursor-pointer" />
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