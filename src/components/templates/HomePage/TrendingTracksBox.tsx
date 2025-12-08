import CardBox from '@/components/modules/Cards/CardBox'
import TrackCard from '@/components/modules/Cards/TrackCard'
import useTrendingTracks from '@/hooks/queryHooks/useTrendingTracks'
import { IoMdMusicalNote } from 'react-icons/io'

const TrendingTracksBox = () => {

    const { data } = useTrendingTracks('limit=20')

    return (
        <CardBox sectionTitle='Trending Tracks' buttonTitle='View all' icon={IoMdMusicalNote} >
            {
                data && data.data.map(track => <TrackCard key={track.id} {...track} />)
            }
        </CardBox>
    )

}

export default TrendingTracksBox