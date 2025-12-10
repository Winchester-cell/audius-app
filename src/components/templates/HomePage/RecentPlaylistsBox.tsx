import CardBox from '@/components/modules/Cards/CardBox'
import PlaylistCard from '@/components/modules/Cards/PlaylistCard'
import usePlaylists from '@/hooks/queryHooks/usePlaylists'
import { CgPlayList } from 'react-icons/cg'

const RecentPlaylistBox = () => {

    const { data } = usePlaylists('limit=10&sort_method=recent')

    return (
        <CardBox sectionTitle='Recet Playlists' buttonTitle='View all' icon={CgPlayList} >
            {
                data && data.data.map(playlist => <PlaylistCard key={playlist.id} {...playlist} />)
            }
        </CardBox>
    )

}

export default RecentPlaylistBox