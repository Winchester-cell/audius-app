'use client'
import useSavedTracks from '@/hooks/queryHooks/useSavedTracks'
import SavedBox from './SavedBox'
import SavedTrackCard from '@/components/modules/Cards/SavedTrackCard'

const SavedTracks = () => {

    const { data } = useSavedTracks()

    return (
        <SavedBox sectionTitle="Saved Tracks" buttonTitle="View all" >
            {data && data.map(track => <SavedTrackCard key={track.trackID} {...track} />)}
        </SavedBox>
    )
}

export default SavedTracks