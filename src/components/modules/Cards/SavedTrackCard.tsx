import useIsSaved from "@/hooks/useIsSaved"
import usePlayAction from "@/hooks/usePlayAction"
import { SavedTrackPayload } from "@/types/saved-list.type"
import { Track } from "@/types/tracks.type"
import { removeSavedTrackHandler, saveTrackHandler } from "@/utils/actions"
import { toTrackFormat } from "@/utils/formatters/toTrackFormat"
import { FC } from "react"
import { AiFillHeart } from "react-icons/ai"
import { CiHeart, CiPlay1 } from "react-icons/ci"

const SavedTrackCard: FC<SavedTrackPayload> = (props) => {

    const { image, trackID, trackTitle, uploaderName } = props

    const { isSaved, setIsSaved } = useIsSaved(trackID, 'track')
    const payloadFormat: SavedTrackPayload = { trackID, uploaderName, image, trackTitle }
    const trackFormat = toTrackFormat(payloadFormat)

    const {playAction} = usePlayAction(trackFormat , trackID)

    return (
        <div className="w-full neu__norm rounded-3xl h-[90px] gap-3 flex px-10 py-3 items-center justify-between">
            <div className="flex items-center gap-3 h-full">
                <img loading="lazy" className="size-[67px] rounded-xl" src={image?.toString()} />
                <div className="h-full pt-1">
                    <div className="text-lg font-semibold line-clamp-1">{trackTitle}</div>
                    <div className="text-(--alt-text) text-[12px] line-clamp-1">{uploaderName}</div>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <CiPlay1 onClick={playAction} className="size-6 cursor-pointer" />
                {isSaved ? (
                    <AiFillHeart onClick={() => removeSavedTrackHandler(payloadFormat, setIsSaved)} className="size-4 lg:size-6 text-rose-500 cursor-pointer" />
                ) : (
                    <CiHeart onClick={() => saveTrackHandler(payloadFormat, setIsSaved)} className="size-3 lg:size-6 cursor-pointer" />
                )}
            </div>
        </div>
    )
}

export default SavedTrackCard