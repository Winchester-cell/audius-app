import { useAudioStore } from "@/stores/audioStore"
import { Track } from "@/types/tracks.type"
import { extractContentId } from "@/utils/extractContentID"
import Link from "next/link"
import { FC } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { CiHeart, CiPlay1 } from "react-icons/ci"



const TrackCard: FC<Track> = (props) => {

    const { id, title, user, artwork } = props

    const imageBaseUrl = `https://audius-discovery-7.cultur3stake.com/content`
    const artWorkID = extractContentId(artwork["150x150"])
    const profilePicID = user.profile_picture ? extractContentId(user.profile_picture["150x150"]) : ''
    const artSize = `150x150`

    const { setTrack , setStreamUrl ,setPlaying } = useAudioStore()
    
    const playHandler = () => {
        setStreamUrl(`api/tracks/${id}/stream`)
        setTrack({...props})
        setPlaying(true)
    }

    return (
        <div className="select-none w-[150px] h-[250px] lg:w-[200px] lg:h-[300px] rounded-2xl flex flex-col hover:scale-[1.03] transition-transform duration-500 me-5">
            <div className="size-[150px] lg:size-[200px] rounded-t-2xl relative overflow-hidden">
                <div className="absolute bottom-0 z-30 w-full p-2 flex items-center gap-2">
                    <div className="w-fit p-1.5 cursor-pointer bg-[#00000021] rounded-full border-2 border-[#ffffff2e] backdrop-blur-[10px] text-white">
                        <CiHeart className="size-4" />
                    </div>
                    <div onClick={playHandler}  className="w-fit p-1.5 cursor-pointer bg-[#00000021] rounded-full border-2 border-[#ffffff2e] backdrop-blur-[10px] text-white">
                        <CiPlay1 className="size-4" />
                    </div>
                </div>
                <div className="w-full h-full img_shadow rounded-t-2xl absolute z-20"></div>
                <img className="w-full h-full object-cover shadow-inner absolute z-10" src={`${imageBaseUrl}/${artWorkID}/${artSize}.jpg`} alt="" />
            </div>
            <div className="neu__norm rounded-b-2xl p-3">
                <Link href={'#'} className="block neu__norm p-3 rounded-xl h-[60px] hover:text-white hover:bg-(--hover-color) transition-all duration-500 cursor-pointer">
                    <span className="font-semibold text-[10px] lg:text-[12px] line-clamp-2 w-full">{title}</span>
                </Link>
                <div className="flex items-center gap-2 py-2 neu__norm mt-3 px-3 rounded-full">
                    {user.profile_picture && <img className="w-5 h-5 rounded-full" src={`${imageBaseUrl}/${profilePicID}/${artSize}.jpg`} alt="" />}
                    {!user.profile_picture && <AiOutlineUser className="size-4" />}
                    <div className="text-(--alt-text) line-clamp-1 text-[10px] lg:text-[12px]">{user.name}</div>
                </div>
            </div>
        </div>
    )
}

export default TrackCard