import TrackCard from "@/components/modules/Cards/TrackCard"
import SpinnerLoading from "@/components/modules/Loadings/SpinnerLoading"
import useTracks from "@/hooks/queryHooks/useTracks"
import { useScrollStore } from "@/stores/scrollStore"
import { Track } from "@/types/tracks.type"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"

interface TracksPageTracksContainerProps {
    tracks: Track[],
    setTracks: Dispatch<SetStateAction<Track[]>>
    filterValue: string
}

const TracksPageTracksContainer: FC<TracksPageTracksContainerProps> = ({ tracks, setTracks, filterValue }) => {

    const [page, setPage] = useState<number>(1)
    const { isBottom, setIsBottom } = useScrollStore()
    const { data, isPending, isError } = useTracks( filterValue === 'trending' ? 'trending' : 'search' , `limit=50&offset=${(page - 1) * 50}&${filterValue !== 'trending' && `sort_method=${filterValue==='popular' ? 'popular' : 'recent'}`}`, true)


    useEffect(() => {
        if (data) {
            const tracksData = [...tracks, ...data.data]
            setTracks(tracksData)
        }
    }, [data])

    useEffect(() => {
        if (!setIsBottom) return
        if (isError) {
            setIsBottom(false)
            return
        }
        if (!isPending) {
            setPage(prev => prev + 1)
            console.log(page);
        }
        setIsBottom(false)
    }, [isBottom])

    return (
        <>
            {
                (tracks && tracks.length !== 0) &&
                <div className="flex items-center flex-wrap justify-center gap-5 neu__norm mt-5 py-10 rounded-3xl">
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