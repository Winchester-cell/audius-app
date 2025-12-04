import { Track } from "@/types/tracks.type"
import { extractContentId } from "@/utils/extractContentID"
import Link from "next/link"
import { FC } from "react"
import { AiOutlineHeart } from "react-icons/ai"

interface TrackCardProps extends Track {
    setStreamUrl?: any
}

const TrackCard: FC<TrackCardProps> = ({ id, title, user, artwork, setStreamUrl }) => {

    const imageBaseUrl = `https://audius-discovery-7.cultur3stake.com/content`
    const artWorkID = extractContentId(artwork["150x150"])
    const profilePicID = extractContentId(user.profile_picture["150x150"])
    const artSize = `150x150`

    return (
        <div onClick={() => setStreamUrl(`api/tracks/${id}/stream`)} className="select-none w-[200px] h-[300px] rounded-2xl flex flex-col hover:scale-[1.03] transition-transform duration-500 me-5">
            <div className="w-[200px] h-[200px] rounded-t-2xl relative overflow-hidden">
                <div className="absolute top-0 z-30 p-3">
                    <AiOutlineHeart className="w-5 h-5" />
                </div>
                <div className="w-full h-full img_shadow rounded-t-2xl absolute z-20"></div>
                <img className="w-full h-full object-cover shadow-inner absolute z-10" src={`${imageBaseUrl}/${artWorkID}/${artSize}.jpg`} alt="" />
            </div>
            <div className="neu__norm rounded-b-2xl p-3">
                <Link href={'#'} className="block neu__norm p-3 rounded-xl h-[60px] hover:text-white hover:bg-(--hover-color) transition-all duration-500 cursor-pointer">
                    <span className="font-semibold text-[12px] line-clamp-2 w-full">{title}</span>
                </Link>
                <div className="flex items-center gap-2 py-2 neu__norm mt-3 px-3 rounded-full">
                    <img className="w-5 h-5 rounded-full" src={`${imageBaseUrl}/${profilePicID}/${artSize}.jpg`} alt="" />
                    <div className="text-(--alt-text) line-clamp-1">{user.name}</div>
                </div>
            </div>
        </div>
    )
}

export default TrackCard