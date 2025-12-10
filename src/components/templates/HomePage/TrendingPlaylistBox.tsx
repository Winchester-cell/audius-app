import CardBox from '@/components/modules/Cards/CardBox'
import PlaylistCard from '@/components/modules/Cards/PlaylistCard'
import useTrendingPlaylists from '@/hooks/queryHooks/useTrendingPlaylists'
import { CgPlayList } from 'react-icons/cg'

const TrendingPlaylistBox = () => {

    const { data } = useTrendingPlaylists('limit=20')

    return (
        <CardBox sectionTitle='Trending Playlists' buttonTitle='View all' icon={CgPlayList} >
            {
                data && data.data.map(playlist => <PlaylistCard key={playlist.id} {...playlist} />)
            }
        </CardBox>
    )

}

export default TrendingPlaylistBox