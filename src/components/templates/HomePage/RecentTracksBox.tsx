import CardBox from '@/components/modules/Cards/CardBox'
import TrackCard from '@/components/modules/Cards/TrackCard'
import useTracks from '@/hooks/queryHooks/useTracks'
import { IoMdMusicalNote } from 'react-icons/io'

const RecentTracksBox = () => {

    const { data } = useTracks('limit=20&sort_method=recent')

    return (
        <CardBox sectionTitle='Recent Tracks' buttonTitle='View all' icon={IoMdMusicalNote} >
            {
                data && data.data.map(track => <TrackCard key={track.id} {...track} />)
            }
        </CardBox>
    )

}

export default RecentTracksBox