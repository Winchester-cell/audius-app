import CardBox from '@/components/modules/Cards/CardBox'
import TrackCard from '@/components/modules/Cards/TrackCard'
import SpinnerLoading from '@/components/modules/Loadings/SpinnerLoading'
import useTracksQuery from '@/hooks/queryHooks/useTracksQuery'
import useInView from '@/hooks/useInView'
import { FaSadTear } from 'react-icons/fa'
import { MdQueueMusic } from 'react-icons/md'

const MusicGenreBox = ({ genreName }: { genreName: string }) => {

    const { elemRef, isInview } = useInView()
    const { data, isPending, isError, refetch } = useTracksQuery('search', `limit=20&genre=${genreName}`, isInview)

    return (
        <div className={`${isInview ? 'opacity-100' : 'opacity-0'} duration-500 transition-opacity`} ref={elemRef}>
            <CardBox allHref={`/tracks?genre=${genreName}`} sectionTitle={genreName} buttonTitle='View all' icon={MdQueueMusic} >
                {
                    isPending &&
                    <div className='flex w-full justify-center items-center h-[150px]'>
                        <SpinnerLoading borderWidth={4} textSize={16} size={20} withText={true} text='Loading data' />
                    </div>
                }
                {
                    isError &&
                    <div className='flex w-full gap-2 justify-center items-center h-[150px] text-[16px]'>
                        <FaSadTear className='size-7 -mt-1' /> Fetching data failed! <button onClick={() => refetch()} className='text-(--hover-color) font-semibold'>Retry</button>
                    </div>
                }
                {
                    data && data.data.map((track) => <TrackCard key={track.id} {...track} />)
                }
            </CardBox>
        </div>
    )

}

export default MusicGenreBox