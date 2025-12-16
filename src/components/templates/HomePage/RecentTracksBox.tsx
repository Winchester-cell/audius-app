import CardBox from '@/components/modules/Cards/CardBox'
import TrackCard from '@/components/modules/Cards/TrackCard'
import SpinnerLoading from '@/components/modules/Loadings/SpinnerLoading'
import useTracks from '@/hooks/queryHooks/useTracks'
import useInView from '@/hooks/useInView'
import { FaSadTear } from 'react-icons/fa'
import { IoMdMusicalNote } from 'react-icons/io'

const RecentTracksBox = () => {

    const { elemRef, isInview } = useInView()
    const { data, isError, isPending, refetch } = useTracks('search', 'limit=20&sort_method=recent', isInview)

    return (
        <div className={`${isInview ? 'opacity-100' : 'opacity-0'} duration-500 transition-opacity`} ref={elemRef}>
            <CardBox allHref='/tracks?sort=recent' sectionTitle='Recent Tracks' buttonTitle='View all' icon={IoMdMusicalNote} >
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
                    data && data.data.map(track => <TrackCard key={track.id} {...track} />)
                }
            </CardBox>
        </div>
    )

}

export default RecentTracksBox