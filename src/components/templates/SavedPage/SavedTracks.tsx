'use client'
import useSavedTracks from '@/hooks/queryHooks/useSavedTracks'
import SavedBox from './SavedBox'
import SavedTrackCard from '@/components/modules/Cards/SavedTrackCard'
import usePagination from '@/hooks/usePagination'
import { SavedTrackPayload } from '@/types/saved-list.type'

const SavedTracks = () => {

    const { data } = useSavedTracks()
    const paginationProps = usePagination<SavedTrackPayload>(data, 4)

    return (
        <SavedBox paginationProps={paginationProps} sectionTitle="Saved Tracks">
            {paginationProps.slicedList && paginationProps.slicedList.map(track => <SavedTrackCard key={track.trackID} {...track} />)}
        </SavedBox>
    )
}

export default SavedTracks