import useIsSaved from "@/hooks/useIsSaved"
import useMusicImage from "@/hooks/useMusicImage"
import usePlayAction from "@/hooks/usePlayAction"
import { SavedTrackPayload } from "@/types/saved-list.type"
import { Track } from "@/types/tracks.type"
import { removeSavedTrackHandler, saveTrackHandler } from "@/utils/actions"
import { getDuration } from "@/utils/formatters/getDuration"
import Link from "next/link"
import { AiFillHeart } from "react-icons/ai"
import { BsFillClipboardXFill, BsHeadphones } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
import { FaDownload } from "react-icons/fa"

const TrackInfoAndActionBox = (props: Track) => {

    const { artwork, genre, mood, title, user, duration, id, description } = props

    const artworkUrl = useMusicImage({ baseImage: artwork["150x150"] ?? null, imageSize: '480x480' })
    const userProfilePicture = useMusicImage({ baseImage: user.profile_picture["150x150"] ?? null, imageSize: '150x150' })

    const { playAction } = usePlayAction(props, id)
    const { isSaved, setIsSaved } = useIsSaved(id, 'track')

    const savePayload: SavedTrackPayload = { image: artworkUrl, trackID: id, trackTitle: title, uploaderName: user.name }

    return (
        <>
            <div className="lg:h-[300px] flex flex-col lg:flex-row items-center neu__norm rounded-2xl overflow-hidden">
                {
                    artworkUrl &&
                    <div className={`relative flex justify-center w-full lg:w-[300px] h-[200px] lg:h-[300px] bg-red-100`}>
                        <div style={{backgroundImage:`url('${artworkUrl}')`}} className="absolute lg:hidden size-full top-0 left-0 blur-md"></div>
                        <img src={artworkUrl} className="size-[200px] lg:size-full absolute" />
                    </div>
                }
                <div className="h-full w-full lg:w-[calc(100%-300px)] flex flex-col gap-3 p-3 lg:p-5">
                    <h2 className="text-lg lg:text-2xl font-semibold line-clamp-1">{title}</h2>
                    <div className="flex items-center justify-between gap-3 rounded-2xl grow w-full">
                        {/* info section */}
                        <div className="w-1/2 flex flex-col gap-3 neu__inner h-full p-4 rounded-2xl">
                            <div className="flex items-center neu__norm w-fit ps-1 pe-5 py-1 rounded-full">
                                {userProfilePicture && <img className="size-5 lg:size-10 rounded-full block me-2" src={userProfilePicture} />}
                                <span className="font-semibold text-[8px] lg:text-[12px]">{user.name}</span>
                            </div>
                            <div className="flex items-center neu__norm w-fit ps-3 pe-6 py-1 lg:py-2 rounded-full gap-1">
                                <span className="font-semibold text-[8px] lg:text-[12px]">Genre :</span> <span className="text-(--alt-text) text-[8px] lg:text-[12px]">{genre}</span>
                            </div>
                            <div className="flex items-center neu__norm w-fit ps-3 pe-6 py-1 lg:py-2 rounded-full gap-1">
                                <span className="font-semibold text-[8px] lg:text-[12px]">Mood :</span> <span className="text-(--alt-text) text-[8px] lg:text-[12px]">{mood}</span>
                            </div>
                            <div className="flex items-center neu__norm w-fit ps-3 pe-6 py-1 lg:py-2 rounded-full gap-1">
                                <span className="font-semibold text-[8px] lg:text-[12px]">Duration :</span> <span className="text-(--alt-text) text-[8px] lg:text-[12px]">{getDuration(duration)}</span>
                            </div>
                        </div>
                        {/* action section */}
                        <div className="w-1/2 flex flex-col gap-3 items-center justify-center">
                            <button onClick={isSaved ? () => removeSavedTrackHandler(savePayload, setIsSaved) : () => saveTrackHandler(savePayload, setIsSaved)} className="lg:text-xl flex items-center ps-5 gap-2 neu__norm py-3 w-[130px] lg:w-[170px] rounded-2xl hover:translate-x-3 transition-[translate] duration-500 text-pink-400">{isSaved ? <AiFillHeart className="size-4 lg:size-7" /> : <CiHeart className="size-4 lg:size-7" />}{isSaved ? `Unsave` : `Save`}</button>
                            <button onClick={playAction} className="lg:text-xl flex items-center ps-5 gap-1 neu__norm py-3 w-[130px] lg:w-[170px] rounded-2xl hover:translate-x-3 transition-[translate] duration-500 text-cyan-600"><BsHeadphones className="size-4 lg:size-7" />Listen</button>
                            <Link href={`/api/tracks/${id}/stream`} className="lg:text-xl flex items-center ps-5 gap-2 neu__norm py-3 w-[130px] lg:w-[170px] rounded-2xl hover:translate-x-3 transition-[translate] duration-500 text-teal-600"><FaDownload className="size-3 lg:size-6" />Download</Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                description ? (
                    <div className="h-[250px] text-lg text-(--alt-text) neu__norm rounded-2xl p-5"><div className="font-semibold">Description: </div> <p className="line-clamp-6">{description}</p></div>
                ) : (
                    <div className="h-[250px] w-full grow text-(--alt-text) neu__norm rounded-2xl flex items-center justify-center gap-2 text-lg"><BsFillClipboardXFill className="size-7 mb-2" />No description Written</div>
                )
            }
        </>
    )
}

export default TrackInfoAndActionBox