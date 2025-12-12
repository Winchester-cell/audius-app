import CardBox from '@/components/modules/Cards/CardBox'
import PlaylistCard from '@/components/modules/Cards/PlaylistCard'
import SpinnerLoading from '@/components/modules/Loadings/SpinnerLoading'
import usePlaylists from '@/hooks/queryHooks/usePlaylists'
import useInView from '@/hooks/useInView'
import { CgPlayList } from 'react-icons/cg'
import { FaSadTear } from 'react-icons/fa'

const RecentPlaylistBox = () => {

    const { elemRef, isInview } = useInView()
    const { data, isError, isPending, refetch } = usePlaylists('search', 'limit=20&sort_method=recent', isInview)

    return (
        <div className={`${isInview ? 'opacity-100' : 'opacity-0'} duration-500 transition-opacity`} ref={elemRef}>
            <CardBox sectionTitle='Recet Playlists' buttonTitle='View all' icon={CgPlayList} >
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
                    data && data.data.map(playlist => <PlaylistCard key={playlist.id} {...playlist} />)
                }
            </CardBox>
        </div>
    )

}

export default RecentPlaylistBox