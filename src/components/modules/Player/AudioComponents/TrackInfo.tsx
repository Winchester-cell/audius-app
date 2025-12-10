import { Track } from "@/types/tracks.type"

interface TrackInfoProps {
    track: Track | null,
    imageUrl: string | null
}

const TrackInfo = ({ track, imageUrl }: TrackInfoProps) => {
    return (
        <div className="h-[38px] lg:h-full lg:w-full flex gap-2 items-center">
            {
                track &&
                <>
                    {imageUrl && <img className="h-full w-auto rounded-lg" src={imageUrl} alt="" />}
                    <div>
                        <div className="text-[10px] lg:text-[12px] font-semibold text-(--colored-text) line-clamp-1">{track.title}</div>
                        <div className="text-[8px] lg:text-[10px] line-clamp-1">{track.user.name}</div>
                    </div>
                </>
            }
        </div>
    )
}

export default TrackInfo