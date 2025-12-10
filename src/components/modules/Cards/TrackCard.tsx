import useMusicImage from "@/hooks/useMusicImage"
import { useAudioStore } from "@/stores/audioStore"
import { Track } from "@/types/tracks.type"
import Link from "next/link"
import { FC, memo } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { CiHeart, CiPlay1 } from "react-icons/ci"



const TrackCard: FC<Track> = (props) => {

    console.log("Rendering TrackCard:", props.id)

    const { id, title, user, artwork } = props
    const artWorkImage = useMusicImage({ baseImage: artwork && artwork["150x150"], imageSize: '150x150' })
    const userProfileImage = useMusicImage({ baseImage: user.profile_picture && user.profile_picture["150x150"], imageSize: '150x150' })

    const setTrack = useAudioStore(state => state.setTrack)
    const setStreamUrl = useAudioStore(state => state.setStreamUrl)
    const setPlaying = useAudioStore(state => state.setPlaying)
    const setPlayerVisible = useAudioStore(state => state.setPlayerVisible)

    const playHandler = () => {
        setPlayerVisible(true)
        setStreamUrl(`api/tracks/${id}/stream`)
        setTrack({ ...props })
        setPlaying(true)
    }

    return (
        <div className="select-none w-[150px] h-[250px] lg:w-[200px] lg:h-[300px] rounded-2xl flex flex-col hover:scale-[1.03] transition-transform duration-500 me-5">
            <div className="size-[150px] lg:size-[200px] rounded-t-2xl relative overflow-hidden">
                <div className="absolute bottom-0 z-30 w-full p-2 flex items-center gap-2">
                    <div className="w-fit p-1.5 cursor-pointer bg-[#00000041] rounded-full border-2 border-[#ffffff2e] backdrop-blur-[5px] text-white">
                        <CiHeart className="size-3 lg:size-4" />
                    </div>
                    <div onClick={playHandler} className="w-fit p-1.5 cursor-pointer bg-[#00000041] rounded-full border-2 border-[#ffffff2e] backdrop-blur-[5px] text-white">
                        <CiPlay1 className="size-3 lg:size-4" />
                    </div>
                </div>
                <div className="w-full h-full img_shadow rounded-t-2xl absolute z-20"></div>
                {artWorkImage && <img loading="lazy" className="w-full h-full object-cover shadow-inner absolute z-10" src={artWorkImage} alt="" />}
            </div>
            <div className="neu__norm rounded-b-2xl p-3">
                <div className="block neu__norm p-3 rounded-xl h-[60px]">
                    <span className="font-semibold text-[10px] lg:text-[12px] line-clamp-2 w-full">{title}</span>
                </div>
                <div className="flex items-center gap-2 py-2 neu__norm mt-3 px-3 rounded-full">
                    {userProfileImage && <img className="w-5 h-5 rounded-full" src={userProfileImage} alt="" />}
                    {!userProfileImage && <AiOutlineUser className="size-4" />}
                    <div className="text-(--alt-text) line-clamp-1 text-[10px] lg:text-[12px]">{user.name}</div>
                </div>
            </div>
        </div>
    )
}

export default memo(TrackCard)