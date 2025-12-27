import TrackCard from "@/components/modules/Cards/TrackCard"
import SpinnerLoading from "@/components/modules/Loadings/SpinnerLoading"
import useTracksQuery from "@/hooks/queryHooks/useTracksQuery"
import useScrollPagination from "@/hooks/useScrollPagination"
import { Track } from "@/types/tracks.type"
import { getEndPoint } from "@/utils/formatters/getEndpoint"
import { useSearchParams } from "next/navigation"
import { Dispatch, FC, SetStateAction} from "react"

interface TracksPageTracksContainerProps {
    tracks: Track[],
    setTracks: Dispatch<SetStateAction<Track[]>>
    filterValue: string
}

const TracksPageTracksContainer: FC<TracksPageTracksContainerProps> = ({ tracks, setTracks, filterValue }) => {

    const genre = useSearchParams().get('genre')
    const mood = useSearchParams().get('mood')
    const queryInfo = getEndPoint(filterValue)
    const { isPending } = useScrollPagination<Track>({
        setData: setTracks,
        fetchHook: (page) => useTracksQuery((queryInfo?.endpoint) as ('trending' | 'search'), `limit=50&offset=${(page - 1) * 50}${genre ? '&genre=' + genre : ''}${mood ? '&mood=' + mood : ''}${queryInfo?.searchparams ? `&${queryInfo.searchparams}` : ''}`, true)
    })

    return (
        <>
            {
                (tracks && tracks.length !== 0) &&
                <div className="flex items-center flex-wrap justify-center gap-5 neu__norm mt-5 py-5 lg:py-10 rounded-3xl">
                    {tracks.map((track, index) => <TrackCard key={index} {...track} />)}
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

export default TracksPageTracksContainer