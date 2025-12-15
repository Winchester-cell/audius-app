import PlaylistCard from "@/components/modules/Cards/PlaylistCard"
import SpinnerLoading from "@/components/modules/Loadings/SpinnerLoading"
import usePlaylists from "@/hooks/queryHooks/usePlaylists"
import useScrollPagination from "@/hooks/useScrollPagination"
import { Playlist } from "@/types/playlist.type"
import { getEndPoint } from "@/utils/formatters/getEndpoint"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"

interface PlaylistsContainerProps {
    playlists: Playlist[],
    setPlaylists: Dispatch<SetStateAction<Playlist[]>>
    filterValue: string
}

const PlaylistsPageContainer: FC<PlaylistsContainerProps> = ({ playlists, setPlaylists, filterValue }) => {

    const queryInfo = getEndPoint(filterValue)
    const {isPending} = useScrollPagination<Playlist>({
        setData:setPlaylists ,
        fetchHook:(page) => usePlaylists((queryInfo?.endpoint) as ('trending' | 'search') , `limit=50&offset=${(page - 1) * 50}&${queryInfo?.searchparams}`, true)
    })

    return (
        <>
            {
                (playlists && playlists.length !== 0) &&
                <div className="flex items-center flex-wrap justify-center gap-5 neu__norm mt-5 py-5 lg:py-10 rounded-3xl">
                    {playlists.map((playlists, index) => <PlaylistCard key={index} {...playlists} />)}
                </div>
            }
            {
                isPending &&
                <div className='flex w-full justify-center items-center py-5 neu__norm rounded-3xl mt-5'>
                    <SpinnerLoading borderWidth={4} textSize={16} size={20} withText={true} text='Loading data' />
                </div>
            }
        </>
    )
}

export default PlaylistsPageContainer